import { SetHashAtom } from "@/types/types";
import { Dispatch, SetStateAction } from "react";

export default function useMenuSelect(
  option: string,
  set: SetHashAtom<string[]> | Dispatch<SetStateAction<string[]>>
) {
  set((prev: string[]) => {
    if (prev.findIndex((o) => o === option) === -1 && option !== "all") {
      return [...prev, option];
    } else if (option === "all") {
      return [];
    } else {
      return [...prev];
    }
  });
}
