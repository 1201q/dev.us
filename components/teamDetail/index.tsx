import { IconHeart } from "@/public/svgs";
import styled from "styled-components";

const TeamDetailPage = ({ id }: { id: string }) => {
  return (
    <Container>
      <Content>
        <TitleText>
          ✨[리액트 네이티브 프론트 개발자 모집]✨ 1달 내로 마무리 예정인
          플젝입니다!! 플젝 경험/배포 운영하기 최적의 조건을 갖춘 사이드
          프로젝트 팀원 모집합니다!
        </TitleText>
        <WriterInfoContainer>
          <p>작성자 | 12분전</p>
        </WriterInfoContainer>
        <div>
          <div>
            <p>✅ 팀 소개</p>
            <p>안녕하세요, 사이드 프로젝트 팀 가로등입니다.</p>
            <p>
              저희는 스낵과자 출시를 목표로 하는 상품기획 프로젝트를 진행하고
              있습니다.
            </p>
            <p>
              현재 상품기획자 1명, MD 1명으로 구성되어 있으며, 브랜딩 및 패키지
              디자인에 관심이 많은 디자이너를 애타게 구하고 있습니다🙌
            </p>
            <p></p>
            <p>✅ 프로젝트 방향성</p>
            <p>✔️ 주제</p>
            <p>
              프로젝트 주제는 익숙한 한국 음식의 특징 및 맛을 부각한 스낵과자
              상품을 출시하는 것입니다.
            </p>
            <p>✔️ 목표</p>
            <p>단기적으로는 와디즈 펀딩 오픈을 목표로 진행 중에 있으며, </p>
            <p>
              장기적으로는 편의점 혹은 마켓컬리와 같은 온오프라인 플랫폼에
              입점하는 것을 지향하고 있습니다.
            </p>
            <p>✔️ 현재 진행단계</p>
            <p>- 개발상품(2종) 맛 기획</p>
            <p>- 브랜드 및 패키지 레퍼런스 수집</p>
            <p>- 개발 및 OEM 업체 컨택중</p>
            <p>✔️ 예상 프로젝트 기간</p>
            <p>- 약 3-4개월(7-8월 와디즈 펀딩 오픈 목표)</p>
            <p></p>
            <p>✅ 회의 주기</p>
            <p>매주 금요일 회의 </p>
            <p>(진행상황에 따라 온,오프라인 진행 예정 / 일자 조율 가능)</p>
            <p></p>
            <p>✅ 모집인원</p>
            <p>✔️ 브랜딩 및 패키지 디자이너 1~2명</p>
            <p>✔️ 담당 업무</p>
            <p>- 로고 및 브랜드무드 디자인 </p>
            <p>- 패키지 디자인</p>
            <p>- 상세페이지 디자인</p>
            <p>현재 디자인 방향성 레퍼런스들은 마련된 상황입니다.</p>
            <p>
              레퍼런스를 보고 더 나은 방향성이 있다면 조율할 수 있으니 참고
              부탁드립니다.
            </p>
            <p></p>
            <p>✅ 지원방법</p>
            <p>✔️ 지원기간: 3/23(토)~4/5(금) (모집완료시 조기마감)</p>
            <p>✔️ 이메일 지원</p>
            <p>- 해당 프로젝트에 참여하고 싶은 이유 작성(길이 상관X)</p>
            <p>- 포트폴리오(첨부 필수)</p>
            <p></p>
            <p>✅ 참고사항</p>
            <p>
              판매를 통한 수익이 발생될 시 논의를 통해 수익을 배분할 예정입니다.
            </p>
            <p>관련하여 문의사항이 있다면 문의 부탁드립니다.</p>
            <p></p>
            <p>✅ 문의사항</p>
            <p>✔️ 오픈카카오톡 링크: https://open.kakao.com/o/grmaQFhg</p>
            <p>✔️ 이메일: streetlight.official.10@gmail.com</p>
            <p></p>
            <p>주저하지 마시고 궁금하신 건 편하게 연락주세요 😁</p>
            <p>감사합니다</p>
          </div>
        </div>
      </Content>
      <Side>
        <SideInfoContainer>
          <Info>
            <InfoHeaderText>모집종류</InfoHeaderText>
            <InfoText>스터디</InfoText>
          </Info>
          <Info>
            <InfoHeaderText>모집분야</InfoHeaderText>
            <InfoText>프론트엔드, 서버/백엔드</InfoText>
          </Info>
          <Info>
            <InfoHeaderText>모집인원</InfoHeaderText>
            <InfoText>4명</InfoText>
          </Info>
          <Info>
            <InfoHeaderText>모집기한</InfoHeaderText>
            <InfoText>14일 남음</InfoText>
          </Info>
          <Info>
            <InfoHeaderText>기술스택</InfoHeaderText>
            <InfoText>JavaScript, React</InfoText>
          </Info>
        </SideInfoContainer>
        <ButtonContainer>
          <Button>참여하기</Button>
          <Button bg="white">
            <IconHeart />
          </Button>
        </ButtonContainer>
      </Side>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 7fr 3fr;
  column-gap: 30px;
  row-gap: 30px;

  padding-bottom: 100px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 10px;
  }
`;

const Content = styled.div`
  line-height: 160%;
  font-size: 18px;
`;

const Side = styled.div`
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

const Button = styled.button<{ bg?: string }>`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 600;
  background-color: ${(props) =>
    props.bg ? props.bg : props.theme.color.bg_black};
  border: ${(props) =>
    `1px solid ${!props.bg ? props.bg : props.theme.color.border_gray}`};
  color: white;

  svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.color.f_lightGray};
  }
`;

const TitleText = styled.p`
  font-size: 22px;
  font-weight: 600;
  line-height: normal;
`;

const WriterInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
  margin-bottom: 30px;

  p {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.color.f_lightGray};
  }
`;

const SideInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const ButtonContainer = styled.div`
  height: 40px;
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 15px;

  @media screen and (max-width: 768px) {
    height: 65px;
    padding: 10px 20px 10px 20px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    gap: 10px;
    background-color: white;
    border-top: ${(props) => `1px solid ${props.theme.color.border_gray}`};
    z-index: 100;
  }
`;

const Info = styled.div`
  margin-bottom: 20px;
`;

const InfoHeaderText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.color.f_lightGray};
  margin-bottom: 7px;
`;

const InfoText = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.color.f_darkGray};
`;

export default TeamDetailPage;
