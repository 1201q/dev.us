import styled from "styled-components";
import { techField, techStack } from "@/constants/options";
import { IconX } from "@/public/svgs";

import { useAtom } from "jotai";
import {
  quizDifficultyOptionsAtom,
  quizFieldOptionsAtom,
  quizFieldDetailOptionsAtom,
  quizStackOptionsAtom,
} from "@/context/location";
import { useEffect, useState } from "react";
import SelectOption from "../shared/select-option/SelectOption";
import SearchInput from "../shared/search-input/SearchInput";

const QuizFilter = () => {
  const [initRender, setInitRender] = useState(false);
  const [selectFieldOption, setSelectFieldOption] =
    useAtom(quizFieldOptionsAtom);
  const [selectDifficultyOption, setSelectDifficultyOption] = useAtom(
    quizDifficultyOptionsAtom
  );
  const [selectFieldDetailOption, setSelectFieldDetailOption] = useAtom(
    quizFieldDetailOptionsAtom
  );
  const [selectStackOptions, setSelectStackOption] =
    useAtom(quizStackOptionsAtom);

  const fieldOptions = [
    { name: "경험", option: "experience" },
    { name: "CS지식", option: "cs" },
    { name: "기술스택", option: "stack" },
  ];
  const difficultyOptions = [
    { name: "쉬움", option: "1" },
    { name: "중간", option: "2" },
    { name: "어려움", option: "3" },
  ];

  const Stack = (option: any) => {
    return (
      <StackItem
        onClick={() => {
          setSelectStackOption((prev) => {
            return prev.filter((o) => o !== option);
          });
        }}
      >
        <p>{techStack.find((o) => o.option === option)?.name}</p>
        <IconX width={8} height={8} />
      </StackItem>
    );
  };

  useEffect(() => {
    setInitRender(true);
  }, []);

  return (
    <>
      {initRender && (
        <Container>
          <InfoHeaderText>검색</InfoHeaderText>
          <SearchInput />
          <InfoHeaderText>분야</InfoHeaderText>
          <SelectOption
            selectOption={selectFieldOption}
            options={fieldOptions}
            onSelectOption={(option) => {
              setSelectFieldOption(option);
            }}
          />
          <InfoHeaderText>난이도순</InfoHeaderText>
          <SelectOption
            selectOption={selectDifficultyOption}
            options={difficultyOptions}
            onSelectOption={(option) => {
              setSelectDifficultyOption(option);
            }}
          />
          <InfoHeaderText>분야 상세</InfoHeaderText>
          <SelectOption
            selectOption={selectFieldDetailOption}
            options={techField}
            onSelectOption={(option) => {
              setSelectFieldDetailOption(option);
            }}
          />
          <InfoHeaderText>기술스택 상세</InfoHeaderText>
          <SelectOption
            fixedDisplayOption={"기술스택을 선택해주세요"}
            options={techStack}
            onSelectOption={(option) => {
              setSelectStackOption((prev) => {
                if (
                  prev.findIndex((o) => o === option) === -1 &&
                  option !== "all"
                ) {
                  return [...prev, option];
                }
                return prev;
              });
            }}
          />
          {selectStackOptions.length >= 1 && (
            <StackContainer>
              {selectStackOptions.map((o) => {
                if (techStack.find((to) => to.option === o)) return Stack(o);
              })}
            </StackContainer>
          )}
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: sticky;
  top: 20px;
  padding: 0px 20px 25px 20px;
  background-color: white;
  border: 1px solid rgb(215, 226, 235);
  border-radius: 10px;
  height: min-content;

  @media screen and (max-width: 768px) {
    position: relative;
    top: 0px;
    padding: 0px 0px;

    border: none;
  }
`;

const InfoHeaderText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.color.f_lightGray};
  margin-bottom: 7px;
  margin-top: 20px;
`;

const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;

  height: min-content;
  max-height: 100%;

  overflow-y: scroll;
  margin-top: 15px;
`;

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

export default QuizFilter;
