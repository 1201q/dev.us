import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import styled from "styled-components";
import useOutSideClick from "./hooks/useOutSideClick";

interface OptionsType {
  option: string;
  name: string;
}

interface PropsType {
  includeAll: boolean;
  options: OptionsType[];
  onSelect: (option: string) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  height?: string;
}

const Menu = ({
  options,
  onSelect,
  setIsOpen,
  includeAll,
  height,
}: PropsType) => {
  const selectRef = useRef<HTMLUListElement | null>(null);

  useOutSideClick([selectRef], () => {
    setIsOpen(false);
  });

  return (
    <Container ref={selectRef} height={height}>
      {includeAll && (
        <Option
          key={"all"}
          onClick={() => {
            onSelect("all");
            setIsOpen(false);
          }}
        >
          전체
        </Option>
      )}
      {options.map((o) => (
        <Option
          key={o.name}
          onClick={() => {
            onSelect(o.option);
            setIsOpen(false);
          }}
        >
          {o.name}
        </Option>
      ))}
    </Container>
  );
};

const Container = styled.ul<{ height: string }>`
  width: 100%;
  max-height: 460px;
  position: absolute;
  left: 0;
  top: ${(props) => `calc(${props.height} + 5px)`};
  padding: 0px 10px 0px 10px;
  border-radius: 4px;
  background-color: white;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 100;
`;

const Option = styled.li`
  display: flex;
  align-items: center;
  height: 35px;
  font-size: 13px;
  font-weight: 500;
  padding: 0px 10px;
  margin: 0;
  cursor: pointer;
  border-radius: 4px;

  :hover {
    background-color: ${(props) => props.theme.color.bg_mint};
    color: white;
  }
`;

export default Menu;
