import { mkdirSync, writeFileSync } from "node:fs";

const line1 =
  "A toaster is a tiny sunbathing bed where bread lies down to catch a tan.";
const line2 =
  "It maps how heat browns both sides of the bread at once, but it leaves out the timer that pops the bread up and the fact that real sunbathers can roll over and walk away whenever they want.";

const entry = line1 + "\n" + line2 + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
