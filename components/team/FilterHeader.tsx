import { techField, techStack } from "@/constants/options";
import { useState, useEffect } from "react";
import styled from "styled-components";

const FilterHeader = () => {
  const [tab, setTab] = useState([
    { select: true, name: "기술스택" },
    { select: false, name: "분야" },
    { select: false, name: "종류" },
  ]);
  const [borderVisible, setBorderVisible] = useState(false);

  const teamType = [
    { name: "사이드 프로젝트", option: "side" },
    { name: "스터디", option: "study" },
    { name: "대회/공모전", option: "competition" },
  ];

  const renderOptions = () => {
    if (tab[0].select) return techStack;
    else if (tab[1].select) return techField;
    else if (tab[2].select) return teamType;
    else return techStack;
  };

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window && window.scrollY > 90) {
        setBorderVisible(true);
      } else {
        setBorderVisible(false);
      }
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <FilterHeaderContainer borderVisible={borderVisible}>
      <FilterContainer>
        <SideTab>
          {tab.map((option, index) => (
            <Tab
              key={option.name}
              select={option.select}
              topOption={tab[0].select}
              bottomOption={tab[2].select}
              onClick={() => {
                setTab((prev) =>
                  prev.map((o, oi) => ({ ...o, select: oi === index }))
                );
              }}
            >
              {option.name}
            </Tab>
          ))}
        </SideTab>
        <OptionContainer>
          {renderOptions().map((o, index) => (
            <Option key={o.option}>{o.name}</Option>
          ))}
        </OptionContainer>
      </FilterContainer>
    </FilterHeaderContainer>
  );
};

const FilterHeaderContainer = styled.div<{ borderVisible: boolean }>`
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

  @media screen and (max-width: 1150px) {
    padding: ${(props) => props.theme.mediaQuery.mobileMargin};
    padding-bottom: 15px;
    padding-top: 10px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  width: 100%;
  height: 105px;
  background-color: white;
  border-radius: 11px;
  border: 1px solid ${(props) => props.theme.color.border_gray};
`;

const SideTab = styled.div`
  width: 120px;
  height: 100%;
  background-color: ${(props) => props.theme.color.bg_gray};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
`;

const Tab = styled.div<{
  select: boolean;
  topOption: boolean;
  bottomOption: boolean;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  cursor: pointer;
  color: white;
  padding: 0px 15px;
  border-top-left-radius: ${(props) => (props.topOption ? "10px" : "0px")};
  border-bottom-left-radius: ${(props) =>
    props.bottomOption ? "10px" : "0px"};
  background-color: ${(props) =>
    props.select ? `${props.theme.color.bg_black}` : "none"};
  color: ${(props) =>
    props.select ? "white" : `${props.theme.color.f_darkGray}`};
  font-size: ${(props) => (props.select ? "15px" : "14px")};
  font-weight: ${(props) => (props.select ? 700 : 500)};
  border: none;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
  width: calc(100% - 120px);
  height: min-content;
  max-height: 100%;
  padding: 10px 15px;
  overflow-y: scroll;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 0px 12px;
  height: 32px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 7px;
  border: ${(props) => `1px solid ${props.theme.color.border_gray}`};
  cursor: pointer;
`;

export default FilterHeader;
