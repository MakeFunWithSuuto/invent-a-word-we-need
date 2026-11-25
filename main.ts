import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_FILENAME = "entry.txt";
const ENTRY_LINE =
  "misheft (n.): the startled upward jolt of lifting an object that turns out to be far lighter than expected.";

function writeEntry(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, ENTRY_FILENAME), ENTRY_LINE, "utf8");
}

writeEntry();
