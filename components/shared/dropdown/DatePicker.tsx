import { useEffect, useState } from "react";
import styled from "styled-components";

import { IconCalendar } from "@/public/svgs";
import { selectStyles, unSelectStyles } from "@/styles/shared";

interface OptionsType {
  option: string;
  name: string;
}

interface PropsType {
  height?: string;
}

const DatePicker = ({ height = "32px" }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initRender, setInitRender] = useState(false);

  useEffect(() => {
    setInitRender(true);
  }, []);

  return (
    <Container height={height}>
      <SelectContainer onClick={() => setIsOpen(true)} isOpen={isOpen}>
        <IconCalendar />
      </SelectContainer>
      <input type="date" />
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
    width: 11px;
    height: 11px;
    fill: ${(props) => props.theme.color.bg_black};
    position: absolute;
    right: 7px;
  }
`;

export default DatePicker;
