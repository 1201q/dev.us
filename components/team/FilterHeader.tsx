import { teamType, techField, techStack } from "@/constants/options";
import { useState } from "react";
import styled from "styled-components";
import useSrcollTrigger from "./hooks/useScrollTrigger";
import { IconX } from "@/public/svgs";
import { useAtom } from "jotai";
import { teamFilterHeaderVisibleAtom } from "@/context/atom";
import SelectOption from "../shared/dropdown/SelectOption";
import SearchInput from "../shared/search-input/SearchInput";
import StackOption from "../shared/stacked-option/StackOption";
import {
  quizFieldDetailOptionsAtom,
  quizStackOptionsAtom,
  teamTypeOptionsAtom,
} from "@/context/location";
import useMenuSelect from "../shared/dropdown/hooks/useMenuSelect";

const FilterHeader = () => {
  const [borderVisible, setBorderVisible] = useState(false);
  const [filterHeaderVisible, setFilterHeaderVisible] = useAtom(
    teamFilterHeaderVisibleAtom
  );

  useSrcollTrigger(90, (scroll) => {
    setBorderVisible(scroll);
  });

  const [selectFieldDetailOption, setSelectFieldDetailOption] = useAtom(
    quizFieldDetailOptionsAtom
  );
  const [selectStackOptions, setSelectStackOption] =
    useAtom(quizStackOptionsAtom);
  const [selectTeamTypeOptions, setSelectTeamTypeOptions] =
    useAtom(teamTypeOptionsAtom);

  return (
    <Container borderVisible={borderVisible}>
      <MobileHeader>
        <HeaderText>필터링</HeaderText>
        <button onClick={() => setFilterHeaderVisible(false)}>
          <IconX />
        </button>
      </MobileHeader>
      <OptionContainer>
        <div>
          <InfoHeaderText>검색</InfoHeaderText>
          <SearchInput />
        </div>
        <div>
          <InfoHeaderText>기술스택</InfoHeaderText>
          <SelectOption
            fixedDisplayOption={"기술스택을 선택해주세요"}
            options={techStack}
            onSelect={(o) => useMenuSelect(o, setSelectStackOption)}
          />
        </div>
        <div>
          <InfoHeaderText>모집분야</InfoHeaderText>
          <SelectOption
            fixedDisplayOption={"모집 분야를 선택해주세요"}
            options={techField}
            onSelect={(o) => useMenuSelect(o, setSelectFieldDetailOption)}
          />
        </div>
        <div>
          <InfoHeaderText>모임종류</InfoHeaderText>
          <SelectOption
            fixedDisplayOption={"종류를 선택해주세요"}
            options={teamType}
            onSelect={(o) => useMenuSelect(o, setSelectTeamTypeOptions)}
          />
        </div>
      </OptionContainer>
      <StackContainer>
        <>
          {selectStackOptions.map((o) => {
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
        <>
          {selectFieldDetailOption.map((o) => {
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
          {selectTeamTypeOptions.map((o) => {
            if (teamType.find((to) => to.option === o))
              return (
                <StackOption
                  key={o}
                  setAtom={setSelectTeamTypeOptions}
                  option={o}
                  options={teamType}
                  optionType="red"
                />
              );
          })}
        </>
      </StackContainer>
    </Container>
  );
};

const Container = styled.div<{ borderVisible: boolean }>`
  position: sticky;
  top: 0px;
  z-index: 100;
  background-color: white;
  border-bottom: ${(props) =>
    props.borderVisible
      ? `1px solid ${props.theme.color.border_gray}`
      : "none"};
  padding: ${(props) => props.theme.mediaQuery.pcMargin};
  padding-bottom: 15px;
  padding-top: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    position: fixed;
    top: 0;
    height: 100dvh;
  }

  @media screen and (max-width: 1150px) {
    padding: ${(props) => props.theme.mediaQuery.mobileMargin};
    padding-bottom: 15px;
    padding-top: 10px;
  }
`;

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

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

const OptionContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
  row-gap: 20px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
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

const InfoHeaderText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.color.f_lightGray};
  margin-bottom: 8px;
`;

const HeaderText = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
`;

export default FilterHeader;
