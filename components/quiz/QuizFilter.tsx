import styled from "styled-components";
import {
  techField,
  techStack,
  quizDifficulty,
  quizField,
} from "@/constants/options";
import { useAtom } from "jotai";
import {
  quizDifficultyOptionsAtom,
  quizFieldOptionsAtom,
  quizFieldDetailOptionsAtom,
  quizStackOptionsAtom,
} from "@/context/location";

import SelectOption from "../shared/dropdown/SelectOption";
import SearchInput from "../shared/search-input/SearchInput";
import StackOption from "../shared/stacked-option/StackOption";
import useMenuSelect from "../shared/dropdown/hooks/useMenuSelect";
import { IconX } from "@/public/svgs";
import { quizFilterVisibleAtom } from "@/context/atom";

const QuizFilter = () => {
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

  const [quizFilterVisible, setQuizFilterVisible] = useAtom(
    quizFilterVisibleAtom
  );

  return (
    <Container visible={quizFilterVisible}>
      <MobileHeader>
        <HeaderText>필터링</HeaderText>
        <button onClick={() => setQuizFilterVisible(false)}>
          <IconX />
        </button>
      </MobileHeader>
      <InfoHeaderText>검색</InfoHeaderText>
      <SearchInput />
      <InfoHeaderText>분야</InfoHeaderText>
      <SelectOption
        fixedDisplayOption={"분야를 선택해주세요"}
        options={quizField}
        onSelect={(o) => useMenuSelect(o, setSelectFieldOption)}
      />
      <InfoHeaderText>난이도순</InfoHeaderText>
      <SelectOption
        fixedDisplayOption={"난이도를 선택해주세요"}
        options={quizDifficulty}
        onSelect={(o) => useMenuSelect(o, setSelectDifficultyOption)}
      />
      <InfoHeaderText>분야 상세</InfoHeaderText>
      <SelectOption
        fixedDisplayOption={"분야를 선택해주세요"}
        options={techField}
        onSelect={(o) => useMenuSelect(o, setSelectFieldDetailOption)}
      />
      <InfoHeaderText>기술스택 상세</InfoHeaderText>
      <SelectOption
        fixedDisplayOption={"기술스택을 선택해주세요"}
        options={techStack}
        onSelect={(o) => useMenuSelect(o, setSelectStackOption)}
      />

      <StackContainer>
        <>
          {selectFieldOption?.map((o) => {
            if (quizField.find((to) => to.option === o))
              return (
                <StackOption
                  key={o}
                  setAtom={setSelectFieldOption}
                  option={o}
                  options={quizField}
                  optionType="blue"
                />
              );
          })}
        </>
        <>
          {selectDifficultyOption?.map((o) => {
            if (quizDifficulty.find((to) => to.option === o))
              return (
                <StackOption
                  key={o}
                  setAtom={setSelectDifficultyOption}
                  option={o}
                  options={quizDifficulty}
                  optionType="red"
                />
              );
          })}
        </>
        <>
          {selectFieldDetailOption?.map((o) => {
            if (techField.find((to) => to.option === o))
              return (
                <StackOption
                  key={o}
                  setAtom={setSelectFieldDetailOption}
                  option={o}
                  options={techField}
                  optionType="green"
                />
              );
          })}
        </>
        <>
          {selectStackOptions?.map((o) => {
            if (techStack.find((to) => to.option === o))
              return (
                <StackOption
                  key={o}
                  setAtom={setSelectStackOption}
                  option={o}
                  options={techStack}
                />
              );
          })}
        </>
      </StackContainer>
    </Container>
  );
};

const Container = styled.div<{ visible: boolean }>`
  position: sticky;
  top: 20px;
  padding: 0px 20px 20px 20px;
  background-color: white;
  border: 1px solid rgb(215, 226, 235);
  border-radius: 10px;
  height: min-content;
  z-index: 100;

  @media screen and (max-width: 768px) {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100dvh;
    border: none;

    display: ${(props) => (props.visible ? "" : " none")};
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
  column-gap: 7px;
  row-gap: 7px;

  height: min-content;
  max-height: 100%;

  overflow-y: scroll;
  margin-top: 15px;

  @media screen and (max-width: 768px) {
    margin-top: 25px;
  }
`;

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-top: 10px;

  button {
    width: 30px;
    height: 30px;

    margin-top: 20px;
    margin-right: 5px;
  }

  svg {
    width: 17px;
    height: 17px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const HeaderText = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
`;

export default QuizFilter;
