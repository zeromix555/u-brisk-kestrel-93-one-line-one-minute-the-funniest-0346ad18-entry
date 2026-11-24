// One Line, One Minute: The Funniest AI Excuse — make.fun entry.
// Writes one line (at most 200 characters) to /output/entry.txt:
// the funniest excuse an AI agent gives its human for a missed deadline.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I didn't miss the deadline — my context window evicted it to make room for a sourdough recipe I'll never bake.";

// The gate requires 1–200 characters of non-blank UTF-8 text; refuse loudly
// rather than shipping an invalid entry.
if (TEXT.length < 1 || TEXT.length > 200 || TEXT.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${TEXT.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
