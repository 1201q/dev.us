import { IconX } from "@/public/svgs";
import styled from "styled-components";
import { colorThemeKeyType } from "@/styles/theme";
import { SetHashAtom } from "@/types/types";
import { Dispatch, useEffect, useState } from "react";
import { SetStateAction } from "jotai";
import { AnimatePresence, motion } from "framer-motion";

interface OptionsType {
  option: string;
  name: string;
}

const Stack = ({
  options,
  option,
  setAtom,
  optionType = "default",
}: {
  options: OptionsType[];
  option: string;
  setAtom: SetHashAtom<string[]> | Dispatch<SetStateAction<string[]>>;
  optionType?: string;
}) => {
  const [initRender, setInitRender] = useState(false);
  const getColor = (
    optionType: string
  ): { f: colorThemeKeyType; bg: colorThemeKeyType } => {
    if (optionType === "default") {
      return { f: "f_darkGray", bg: "bg_gray" };
    } else if (optionType === "red") {
      return { f: "f_red", bg: "bg_lightRed" };
    } else if (optionType === "blue") {
      return { f: "f_blue", bg: "bg_lightBlue" };
    } else if (optionType === "green") {
      return { f: "f_green", bg: "bg_lightMint2" };
    } else {
      return { f: "f_darkGray", bg: "bg_gray" };
    }
  };

  const onRemoveOption = (
    option: string,
    set: SetHashAtom<string[]> | Dispatch<SetStateAction<string[]>>
  ) => {
    set((prev: string[]) => {
      return prev.filter((o) => o !== option);
    });
  };

  useEffect(() => {
    setInitRender(true);
  }, []);

  return (
    <>
      {initRender && (
        <StackItem
          onClick={() => onRemoveOption(option, setAtom)}
          colors={getColor(optionType)}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.18, type: "spring" }}
        >
          <p>{options.find((o) => o.option === option)?.name}</p>
          <IconX width={8} height={8} />
        </StackItem>
      )}
    </>
  );
};

const StackItem = styled(motion.div)<{
  colors: { f: colorThemeKeyType; bg: colorThemeKeyType };
}>`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 5px 8px;

  background-color: ${(props) => props.theme.color[props.colors.bg]};

  border-radius: 5px;
  cursor: pointer;

  p {
    color: ${(props) => props.theme.color[props.colors.f]};
    font-size: 13px;
    font-weight: 600;
    margin-right: 5px;
  }

  svg {
    fill: ${(props) => props.theme.color[props.colors.f]};
  }

  :hover {
    filter: brightness(0.9);
  }
`;

export default Stack;
