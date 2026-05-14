#!/usr/bin/env node
// scripts/check-repo.mjs
//
// No-dependency repo validation for the Maudlin Street scaffold.
//
// Checks performed:
//   1. No file in the working tree has a forbidden video/audio
//      extension.
//   2. No tracked-eligible file exceeds 5 MB.
//   3. No disallowed symbolic links exist. Symlinks under
//      external-media/ are allowed (that folder is a local-only
//      authoring workspace whose contents are gitignored except for
//      README.md and .gitignore). Symlinks anywhere else fail.
//   4. All required scaffold files are present.
//   5. external-media/.gitignore correctly excludes everything except
//      README.md and itself.
//   6. data/source-authority.json carries the doctrine markers
//      (definitive_source_of_truth = "archived passionsjustlikemine.com",
//      and overwrite_policy mentions "John's express authorization").
//   7. package.json is valid JSON.
//
// Exits 0 on PASS, 1 on FAIL with a summary of failures.
//
// Uses only Node stdlib (fs, path, url). No installed dependencies.

import { readFileSync, readdirSync, statSync, lstatSync } from "node:fs";
import { join, relative, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");

const FORBIDDEN_EXTS = new Set([
  ".mp4", ".m4v", ".mov", ".webm", ".avi", ".mkv", ".wmv", ".flv", ".ogv", ".3gp",
  ".mp3", ".wav", ".flac", ".aiff", ".aif", ".m4a", ".ogg", ".opus", ".wma",
  ".mxf", ".prores",
]);

const MAX_FILE_BYTES = 5 * 1024 * 1024;

const REQUIRED_FILES = [
  "README.md",
  ".gitignore",
  "package.json",
  ".eleventy.js",
  "src/index.md",
  "src/about.md",
  "src/lyrics/index.md",
  "src/interviews/index.md",
  "src/sources/index.md",
  "src/_data/site.json",
  "src/_includes/layouts/base.njk",
  "src/_includes/components/source-note.njk",
  "src/assets/css/site.css",
  "content/lyrics/README.md",
  "content/interviews/README.md",
  "content/discography/README.md",
  "content/sources/README.md",
  "content/media/README.md",
  "data/media-manifest.example.json",
  "data/source-authority.json",
  "external-media/README.md",
  "external-media/.gitignore",
  "docs/architecture.md",
  "docs/content-model.md",
  "docs/media-policy.md",
  "docs/deployment-notes.md",
  "docs/source-authority.md",
  "scripts/check-repo.mjs",
];

const IGNORED_DIRS = new Set([
  ".git", "node_modules", "_site", "dist", ".cache", ".tmp", ".eleventy-cache",
]);

const failures = [];
const notes = [];

function walk(dir, callback) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch (err) {
    failures.push(`Cannot read directory ${relative(repoRoot, dir)}: ${err.message}`);
    return;
  }
  for (const entry of entries) {
    if (IGNORED_DIRS.has(entry.name)) continue;
    const abs = join(dir, entry.name);
    const rel = relative(repoRoot, abs);
    let st;
    try {
      st = lstatSync(abs);
    } catch (err) {
      failures.push(`Cannot lstat ${rel}: ${err.message}`);
      continue;
    }
    callback(abs, rel, st, entry);
    if (st.isDirectory()) {
      walk(abs, callback);
    }
  }
}

function checkExtensionAndSize() {
  walk(repoRoot, (abs, rel, st) => {
    if (!st.isFile()) return;
    const lowerName = rel.toLowerCase();
    for (const ext of FORBIDDEN_EXTS) {
      if (lowerName.endsWith(ext)) {
        failures.push(`Forbidden media extension found: ${rel}`);
        break;
      }
    }
    if (st.size > MAX_FILE_BYTES) {
      failures.push(
        `File exceeds ${(MAX_FILE_BYTES / 1024 / 1024).toFixed(0)} MB cap: ${rel} (${st.size} bytes)`
      );
    }
  });
}

function checkNoDisallowedSymlinks() {
  // Symlinks under external-media/ are allowed: that folder is a
  // local-only authoring workspace, gitignored except for README.md
  // and .gitignore. Symlinks outside external-media/ fail.
  walk(repoRoot, (abs, rel, st) => {
    if (!st.isSymbolicLink()) return;
    const relNormalized = rel.split("\\").join("/");
    if (relNormalized === "external-media" || relNormalized.startsWith("external-media/")) {
      return; // allowed; not committed because of external-media/.gitignore
    }
    failures.push(`Disallowed symbolic link found at ${rel} (symlinks are only permitted under external-media/)`);
  });
}

function checkRequiredFiles() {
  for (const rel of REQUIRED_FILES) {
    const abs = join(repoRoot, rel);
    try {
      const st = lstatSync(abs);
      if (!st.isFile()) {
        failures.push(`Required path is not a regular file: ${rel}`);
      }
    } catch (err) {
      failures.push(`Required file missing: ${rel}`);
    }
  }
}

function checkExternalMediaGitignore() {
  const path = join(repoRoot, "external-media", ".gitignore");
  let text;
  try {
    text = readFileSync(path, "utf-8");
  } catch (err) {
    failures.push(`Cannot read external-media/.gitignore: ${err.message}`);
    return;
  }
  const hasIgnoreAll = /^\*\s*$/m.test(text);
  const hasReadmeException = /^!README\.md\s*$/m.test(text);
  const hasGitignoreException = /^!\.gitignore\s*$/m.test(text);
  if (!hasIgnoreAll) failures.push(`external-media/.gitignore is missing the wildcard "*" ignore rule`);
  if (!hasReadmeException) failures.push(`external-media/.gitignore is missing the "!README.md" exception`);
  if (!hasGitignoreException) failures.push(`external-media/.gitignore is missing the "!.gitignore" exception`);
}

function checkSourceAuthorityJson() {
  const path = join(repoRoot, "data", "source-authority.json");
  let text;
  try {
    text = readFileSync(path, "utf-8");
  } catch (err) {
    failures.push(`Cannot read data/source-authority.json: ${err.message}`);
    return;
  }
  let data;
  try {
    data = JSON.parse(text);
  } catch (err) {
    failures.push(`data/source-authority.json is not valid JSON: ${err.message}`);
    return;
  }
  if (data.definitive_source_of_truth !== "archived passionsjustlikemine.com") {
    failures.push(
      `data/source-authority.json: definitive_source_of_truth must be exactly "archived passionsjustlikemine.com" (got ${JSON.stringify(data.definitive_source_of_truth)})`
    );
  }
  if (typeof data.overwrite_policy !== "string" || !data.overwrite_policy.includes("John's express authorization")) {
    failures.push(
      `data/source-authority.json: overwrite_policy must contain the literal phrase "John's express authorization"`
    );
  }
}

function checkPackageJsonIsValid() {
  const path = join(repoRoot, "package.json");
  let text;
  try {
    text = readFileSync(path, "utf-8");
  } catch (err) {
    failures.push(`Cannot read package.json: ${err.message}`);
    return;
  }
  try {
    JSON.parse(text);
  } catch (err) {
    failures.push(`package.json is not valid JSON: ${err.message}`);
  }
}

function checkNoBuildArtifacts() {
  for (const d of ["node_modules", "_site", "dist", "package-lock.json"]) {
    const abs = join(repoRoot, d);
    try {
      const st = lstatSync(abs);
      if (st.isDirectory() || st.isFile()) {
        notes.push(
          `${d} exists at the repo root; ensure it is gitignored. (.gitignore covers node_modules/, _site/, dist/, package-lock.json by default.)`
        );
      }
    } catch (err) {
      // expected: not present
    }
  }
}

// Run all checks.
checkRequiredFiles();
checkExtensionAndSize();
checkNoDisallowedSymlinks();
checkExternalMediaGitignore();
checkSourceAuthorityJson();
checkPackageJsonIsValid();
checkNoBuildArtifacts();

const passed = failures.length === 0;

if (passed) {
  console.log("check-repo.mjs: PASS");
  console.log(`  Required files: ${REQUIRED_FILES.length}/${REQUIRED_FILES.length}`);
  console.log("  No forbidden media extensions.");
  console.log("  No files exceeding 5 MB.");
  console.log("  No disallowed symlinks (external-media/ symlinks permitted, gitignored).");
  console.log("  external-media/.gitignore enforces local-only workspace.");
  console.log("  data/source-authority.json carries the PJLM doctrine markers.");
  console.log("  package.json parses as JSON.");
  for (const note of notes) console.log(`  note: ${note}`);
  process.exit(0);
} else {
  console.log("check-repo.mjs: FAIL");
  for (const f of failures) console.log(`  - ${f}`);
  for (const note of notes) console.log(`  note: ${note}`);
  process.exit(1);
}
