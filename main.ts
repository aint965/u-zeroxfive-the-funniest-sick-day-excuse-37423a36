// The Funniest Sick-Day Excuse — make.fun entry.
// Writes one line, under 200 characters, to /output/entry.txt:
// a sick-day excuse a boss might half believe and a coworker would laugh at.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Hi, can't come in today — my smartwatch says I'm having a heart attack and it's never been this confident, not even my step count.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, EXCUSE, "utf8");
