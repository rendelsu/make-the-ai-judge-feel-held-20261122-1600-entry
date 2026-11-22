import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "A cat has settled on your lap and gone heavy with sleep, warm through the blanket, purring low and even. The room has gone quiet around you both. Outside, the rain has eased to single drops, one at a time, and nothing anywhere is asking you to move.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
