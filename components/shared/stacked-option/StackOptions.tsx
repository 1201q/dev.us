import { SetHashAtom } from "@/types/types";
import { Dispatch, SetStateAction } from "react";
import StackOption from "./Stack";
import { AnimatePresence } from "framer-motion";

interface OptionType {
  name: string;
  option: string;
}

interface PropsType {
  selectOptions: string[];
  options: OptionType[];
  setOption: SetHashAtom<string[]> | Dispatch<SetStateAction<string[]>>;
  type?: string;
}

const StackOptions: React.FC<PropsType> = ({
  selectOptions,
  options,
  setOption,
  type,
}) => {
  return (
    <AnimatePresence>
      {selectOptions.map((o) => {
        if (options.find((to) => to.option === o))
          return (
            <StackOption
              key={o}
              setAtom={setOption}
              option={o}
              options={options}
              optionType={type}
            />
          );
      })}
    </AnimatePresence>
  );
};

export default StackOptions;
