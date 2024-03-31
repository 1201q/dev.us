import { SetHashAtom } from "@/types/types";

export default function useMenuSelect(
  option: string,
  set: SetHashAtom<string[]>
) {
  set((prev) => {
    if (prev.findIndex((o) => o === option) === -1 && option !== "all") {
      return [...prev, option];
    } else if (option === "all") {
      return [];
    } else {
      return [...prev];
    }
  });
}
