#!/usr/bin/env node
/**
 * Extracts http(s) URLs from a markdown or text file for manual spot-checking.
 * Usage: node scripts/verify-citations.mjs <file.md>
 * No network I/O — safe to run anywhere.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = process.argv[2];
if (!file) {
  console.error("Usage: node verify-citations.mjs <path-to-file>");
  process.exit(1);
}
const text = readFileSync(file, "utf8");
const re = /https?:\/\/[^\s\])>'"]+/gi;
const found = new Set();
let m;
while ((m = re.exec(text)) !== null) {
  const u = m[0].replace(/[.,;:!?)]+$/, "");
  found.add(u);
}
const list = [...found].sort();
console.log(`Found ${list.length} unique URL(s) in ${file}:\n`);
for (const u of list) console.log(u);
process.exit(0);
