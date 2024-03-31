import { atomWithHash } from "jotai-location";

export const quizDifficultyOptionsAtom = atomWithHash<string[]>(
  "difficulty",
  [],
  {
    setHash: "replaceState",
  }
);
export const quizFieldOptionsAtom = atomWithHash<string[]>("field", [], {
  setHash: "replaceState",
});

export const quizFieldDetailOptionsAtom = atomWithHash<string[]>(
  "fieldDetail",
  [],
  {
    setHash: "replaceState",
  }
);

export const quizStackOptionsAtom = atomWithHash<string[]>("stack", [], {
  setHash: "replaceState",
});

export const searchKeywordAtom = atomWithHash<string>("keyword", "", {
  setHash: "replaceState",
});

export const teamTypeOptionsAtom = atomWithHash<string[]>("teamType", [], {
  setHash: "replaceState",
});

export const sortOptionAtom = atomWithHash<string>("sort", "", {
  setHash: "replaceState",
});
