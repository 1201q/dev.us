import { atomWithHash } from "jotai-location";
import { atom } from "jotai";

export const quizDifficultyOptionsAtom = atomWithHash<string>(
  "difficulty",
  "",
  {
    setHash: "replaceState",
  }
);
export const quizFieldOptionsAtom = atomWithHash<string>("field", "", {
  setHash: "replaceState",
});

export const quizFieldDetailOptionsAtom = atomWithHash<string>(
  "fieldDetail",
  "",
  {
    setHash: "replaceState",
  }
);

export const quizStackOptionsAtom = atomWithHash<string[]>("stack", [], {
  setHash: "replaceState",
});
