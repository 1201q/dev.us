import { IconX } from "@/public/svgs";
import styled from "styled-components";

interface OptionsType {
  option: string;
  name: string;
}
const StackOption = ({
  options,
  option,
  onClick,
  optionType,
}: {
  options: OptionsType[];
  option: string;
  onClick: (option: string) => void;
  optionType: string;
}) => {
  const getColor = (optionType: string): { f: string; bg: string } => {
    if (optionType === "default") {
      return { f: "f_darkGray", bg: "bg_gray" };
    } else if (optionType === "red") {
      return { f: "", bg: "" };
    } else if (optionType === "blue") {
      return { f: "", bg: "" };
    } else if (optionType === "yellow") {
      return { f: "", bg: "" };
    }
    return { f: "", bg: "" };
  };

  return (
    <StackItem onClick={() => onClick(option)}>
      <p>{options.find((o) => o.option === option)?.name}</p>
      <IconX width={8} height={8} />
    </StackItem>
  );
};

const StackItem = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 5px 8px;

  background-color: #e9ecf3;

  border-radius: 5px;
  cursor: pointer;

  p {
    color: #44576c;
    font-size: 13px;
    font-weight: 500;
    margin-right: 5px;
  }

  svg {
    fill: #44576c;
  }
`;

export default StackOption;
