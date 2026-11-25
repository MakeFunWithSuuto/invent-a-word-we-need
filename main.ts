import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_FILENAME = "entry.txt";
const ENTRY_LINE =
  "partwalk (n.): the awkward stretch of walking in the same direction as someone right after saying goodbye.";

function writeEntry(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, ENTRY_FILENAME), ENTRY_LINE, "utf8");
}

writeEntry();
