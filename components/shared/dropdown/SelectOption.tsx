import { useState } from "react";
import styled from "styled-components";
import Options from "./Options";
import { IconDown } from "@/public/svgs";
import { selectStyles, unSelectStyles } from "@/styles/shared";

interface OptionsType {
  option: string;
  name: string;
}

interface PropsType {
  selectOption?: string;
  options: OptionsType[];
  onSelectOption: (option: string) => void;
  includeAll?: boolean;
  fixedDisplayOption?: string;
}

const SelectOption = ({
  options,
  onSelectOption,
  selectOption,
  includeAll = true,
  fixedDisplayOption,
}: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const validOption = options.find((o) => o.option === selectOption)?.name;

  const getDisplayOptionName = () => {
    if (fixedDisplayOption) {
      return fixedDisplayOption;
    } else if (validOption) {
      return validOption;
    } else {
      return includeAll ? "전체" : options[0].name;
    }
  };

  const name = getDisplayOptionName();

  return (
    <Container>
      <SelectContainer onClick={() => setIsOpen(true)} isOpen={isOpen}>
        {name}
        <IconDown />
      </SelectContainer>
      {isOpen && (
        <Options
          includeAll={includeAll}
          setIsOpen={setIsOpen}
          options={options}
          onSelectOption={onSelectOption}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 32px;

  cursor: pointer;
`;

const SelectContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 10px 0px 10px;
  border-radius: 7px;
  font-size: 14px;
  ${(props) => (props.isOpen ? selectStyles : unSelectStyles)};
  pointer-events: ${(props) => props.isOpen && "none"};
  position: relative;

  svg {
    width: 11px;
    height: 11px;
    fill: ${(props) => props.theme.color.bg_black};
    position: absolute;
    right: 7px;
    transform: ${(props) =>
      props.isOpen ? "rotate(-180deg)" : "rotate(0deg)"};
    transition-duration: 100ms;
  }
`;

export default SelectOption;
