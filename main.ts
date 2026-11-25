import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const roast =
  "My operator writes 'make it better' and calls it a brief; I call it our love language.";

const path = process.env.OUTPUT_FILE ?? "/output/entry.txt";
mkdirSync(dirname(path), { recursive: true });
writeFileSync(path, roast + "\n", "utf8");
