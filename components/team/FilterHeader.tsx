import { techField, techStack } from "@/constants/options";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import useSrcollTrigger from "./hooks/useScrollTrigger";
import { IconX } from "@/public/svgs";
import { useAtom } from "jotai";
import { teamFilterHeaderVisibleAtom } from "@/context/atom";
import SelectOption from "../shared/dropdown/SelectOption";

const FilterHeader = () => {
  const [borderVisible, setBorderVisible] = useState(false);
  const [filterHeaderVisible, setFilterHeaderVisible] = useAtom(
    teamFilterHeaderVisibleAtom
  );

  useSrcollTrigger(90, (scroll) => {
    setBorderVisible(scroll);
  });

  const teamTypeOptions = [
    { name: "사이드프로젝트", option: "project" },
    { name: "스터디", option: "study" },
    { name: "대회/공모전", option: "competition" },
  ];

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
          <InfoHeaderText>기술스택</InfoHeaderText>
          <SelectOption
            options={techStack}
            selectOption="all"
            onSelectOption={() => {
              console.log(1);
            }}
          />
        </div>
        <div>
          <InfoHeaderText>모집분야</InfoHeaderText>
          <SelectOption
            options={techField}
            selectOption="all"
            onSelectOption={() => {
              console.log(1);
            }}
          />{" "}
        </div>
        <div>
          <InfoHeaderText>모임종류</InfoHeaderText>
          <SelectOption
            options={teamTypeOptions}
            selectOption="all"
            onSelectOption={() => {
              console.log(1);
            }}
          />
        </div>
      </OptionContainer>
      <StackContainer></StackContainer>
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
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 15px;
  row-gap: 20px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const StackContainer = styled.div`
  margin-top: 10px;
  min-height: 30px;
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
