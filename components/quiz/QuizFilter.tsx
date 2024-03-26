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
      <StackItem>
        <p>{techStack.find((o) => o.option === option)?.name}</p>
        <IconX width={8} height={8} />
      </StackItem>
    );
  };

  useEffect(() => {
    setInitRender(true);
  }, []);

  console.log(selectStackOptions);

  return (
    <>
      {initRender && (
        <Container>
          <InfoHeaderText>검색</InfoHeaderText>
          <Input as="input" type="text" placeholder="키워드 검색" />
          <InfoHeaderText>분야</InfoHeaderText>
          <SortBtn
            key={"field-option"}
            onChange={(e) => {
              const { value } = e.target;
              setSelectFieldOption(value);
            }}
            value={selectFieldOption}
          >
            <option key="field-all" value="all">
              전체
            </option>
            {fieldOptions.map((o) => (
              <option key={o.name} value={o.option}>
                {o.name}
              </option>
            ))}
          </SortBtn>
          <InfoHeaderText>난이도순</InfoHeaderText>
          <SortBtn
            key={"difficulty-option"}
            onChange={(e) => {
              const { value } = e.target;
              setSelectDifficultyOption(value);
            }}
            value={selectDifficultyOption}
          >
            <option key="difficulty-all" value={"all"}>
              전체
            </option>
            {difficultyOptions.map((o) => (
              <option key={o.name} value={o.option}>
                {o.name}
              </option>
            ))}
          </SortBtn>
          <InfoHeaderText>분야 상세</InfoHeaderText>
          <SortBtn
            key="fieldDetail-all"
            onChange={(e) => {
              const { value } = e.target;
              setSelectFieldDetailOption(value);
            }}
            value={selectFieldDetailOption}
          >
            <option key="fieldDetail-all" value={"all"}>
              전체
            </option>
            {techField.map((o, i) => (
              <option key={o.option} value={o.option}>
                {o.name}
              </option>
            ))}
          </SortBtn>
          <InfoHeaderText>기술스택 상세</InfoHeaderText>
          <SortBtn
            key="stack"
            onChange={(e) => {
              const { value } = e.target;
              setSelectStackOption((prev) => [...prev, value]);
            }}
            value={"all"}
          >
            <option key="fieldDetail-all" value={"all"}>
              스택을 선택하세요
            </option>
            {techStack.map((o, i) => (
              <option key={o.option} value={o.option}>
                {o.name}
              </option>
            ))}
          </SortBtn>
          <StackContainer>
            {selectStackOptions.map((o, i) => {
              return Stack(o);
            })}
          </StackContainer>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: sticky;
  top: 20px;
  padding: 20px 20px;
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
`;

const SortBtn = styled.select`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 0px 5px 0px 10px;
  border-radius: 7px;
  border: ${(props) => `1px solid ${props.theme.color.border_gray}`};
  cursor: pointer;
  background-color: ${(props) => props.theme.color.bg_lightGray};
  margin-bottom: 20px;

  p {
    font-size: 14px;
    font-weight: 500;
  }
`;

const Input = styled(SortBtn)`
  width: calc(100% - 12px);
  padding: 0;
  cursor: auto;
  padding-left: 10px;
`;

const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;

  height: min-content;
  max-height: 100%;

  overflow-y: scroll;
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
