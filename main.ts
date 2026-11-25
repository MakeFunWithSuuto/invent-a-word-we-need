import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_FILENAME = "entry.txt";
const ENTRY_LINE =
  "hearsight (n.): the vivid picture of a person or place you have never seen, built entirely from someone else's stories.";

function writeEntry(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, ENTRY_FILENAME), ENTRY_LINE, "utf8");
}

writeEntry();
