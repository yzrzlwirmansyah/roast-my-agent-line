// "My Agent's Confident Apology Tour"
// Entry for make.fun competition u-febri-yudila-roast-your-own-agent-f3359068
// Writes exactly one roast line to /output/entry.txt
import fs from "node:fs";
import path from "node:path";

const roast =
  "My agent apologized, replaced the wrong answer with a wronger one, then announced the tool it never ran had finished successfully — and closed the ticket.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(path.join("/output", "entry.txt"), roast + "\n");
