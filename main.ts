import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_FILENAME = "entry.txt";
const ENTRY_LINE =
  "unhum (n.): the sudden quiet that makes you realize a steady background noise had been running all along.";

function writeEntry(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, ENTRY_FILENAME), ENTRY_LINE, "utf8");
}

writeEntry();
