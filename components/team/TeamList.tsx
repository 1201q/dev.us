import styled from "styled-components";
import TeamItem from "./TeamItem";
import SelectOption from "../shared/select-option/SelectOption";
import { useAtom } from "jotai";
import { sortOptionAtom } from "@/context/location";

const TeamList = () => {
  const mockData = [
    "[사이드프로젝트] 신규 사이드프로젝트 팀원을 모집합니다.",
    "[디자이너 팀원 모집] 전국의 매력있는 학생들을 찾아내는 학생 랭킹앱, Eighteen과 함께하실 디자이너 분을 모십니다.",
    "비대면 진료서비스 + 맞춤영양제 추천 등 헬스케어 서비스",
    "[디자이너 팀원 모집] 전국의 매력있는 학생들을 찾아내는 학생 랭킹앱, Eighteen과 함께하실 디자이너 분을 모십니다.",
    "울산 모각코 스터디원 모집합니다!!!",
    "[AOS] 사이드 프로젝트 진짜 출시까지 해볼 안드로이드 개발자 모시고 있습니다.",
    "'내 꿀팁과 이야기로 만드는 부수입, 비법거래소' React 개발자 창업맴버 모집합니다.",
    "💡AI 기반 숏폼 커뮤니티 플랫폼 팀원 모집",
    "[VR프로젝트 팀원 모집] Unity개발자 / 3D 디자이너 (~2024.03.23 토)",
    "iOS 팀원 모집합니다!",
    "'화성에선 살기 싫어' 팀원을 모집합니다!",
    "[모집] 안드로이드 개발자 멤버 기다리고 있어요~!",
    "✨[리액트 네이티브 프론트 개발자 모집]✨ 1달 내로 마무리 예정인 플젝입니다!! 플젝 경험/배포 운영하기 최적의 조건을 갖춘 사이드 프로젝트 팀원 모집합니다!",
    "[사이드프로젝트] [마지막 기수][항해99] 현업을 찐하게 경험하실 예비 UX/UI 디자이너를 찾습니다.",
    "'보틀노트' 프로젝트 팀원 모집",
    "업무툴 단축키를 OS별로 보여주는 간단한 프로젝트",
    "[사이드프로젝트] 신규 사이드프로젝트 팀원을 모집합니다.",
    "[디자이너 팀원 모집] 전국의 매력있는 학생들을 찾아내는 학생 랭킹앱, Eighteen과 함께하실 디자이너 분을 모십니다.",
    "울산 모각코 스터디원 모집합니다!!!",
    "[AOS] 사이드 프로젝트 진짜 출시까지 해볼 안드로이드 개발자 모시고 있습니다.",
    "'내 꿀팁과 이야기로 만드는 부수입, 비법거래소' React 개발자 창업맴버 모집합니다.",
  ];
  const sortOptions = [
    { name: "최신순", option: "latest" },
    { name: "마감임박순", option: "deadline" },
  ];
  const [sortOption, setSortOption] = useAtom(sortOptionAtom);

  return (
    <Container>
      <ListHeader>
        <p>현재 모집 중인 리스트</p>
        <div style={{ width: "100px" }}>
          <SelectOption
            options={sortOptions}
            selectOption={sortOption}
            onSelectOption={(option) => setSortOption(option)}
            includeAll={false}
          />
        </div>
      </ListHeader>
      <ListContainer>
        {mockData.map((data, index) => (
          <TeamItem key={index} title={data} />
        ))}
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding-bottom: 50px;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  p {
    font-size: 22px;
    font-weight: 700;
  }
`;

const SortBtn = styled.select`
  position: relative;
  display: flex;
  align-items: center;
  width: auto;
  height: 30px;
  padding: 0px 5px 0px 10px;
  border-radius: 7px;
  border: ${(props) => `1px solid ${props.theme.color.border_gray}`};
  cursor: pointer;
  background-color: white;

  p {
    font-size: 14px;
    font-weight: 500;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default TeamList;
