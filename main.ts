// The One-Line Exit — a one-line resignation letter (Node 22, stdlib only).
//
// The entry is a single literal line. The program writes it to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output when the variable is unset),
// with no trailing newline, and reads no files at all.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Dear HR, I quit. My job description said 'other duties as assigned,' and yesterday that meant unclogging the office toilet.";

function outDir(): string {
  const d = process.env.MAKEFUN_OUTPUT_DIR;
  return d && d.length > 0 ? d : "/output";
}

function main(): void {
  // The kit's gate: 1 to 140 characters, not only white space.
  if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
    throw new Error("exit line fails the 1-140 character gate");
  }
  const dir = outDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
}

main();
