import { useEffect, useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import { IconDown } from "@/public/svgs";
import { selectStyles, unSelectStyles } from "@/styles/shared";

interface OptionsType {
  option: string;
  name: string;
}

interface PropsType {
  selectOption?: string;
  options: OptionsType[];
  onSelect: (option: string) => void;
  includeAll?: boolean;
  fixedDisplayOption?: string;
  height?: string;
}

const SelectOption = ({
  options,
  onSelect,
  selectOption,
  includeAll = true,
  fixedDisplayOption,
  height = "32px",
}: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initRender, setInitRender] = useState(false);
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

  useEffect(() => {
    setInitRender(true);
  }, []);

  return (
    <Container height={height}>
      <SelectContainer onClick={() => setIsOpen(true)} isOpen={isOpen}>
        {initRender && name}
        <IconDown />
      </SelectContainer>
      {isOpen && (
        <Menu
          includeAll={includeAll}
          setIsOpen={setIsOpen}
          options={options}
          onSelect={onSelect}
          height={height}
        />
      )}
    </Container>
  );
};

const Container = styled.div<{ height: string }>`
  position: relative;
  height: ${(props) => props.height};

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
    width: 16px;
    height: 16px;
    fill: ${(props) => props.theme.color.bg_black};
    position: absolute;
    right: 7px;
    transform: ${(props) =>
      props.isOpen ? "rotate(-180deg)" : "rotate(0deg)"};
    transition-duration: 100ms;
  }
`;

export default SelectOption;
