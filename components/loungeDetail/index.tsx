import styled from "styled-components";
import CommentItem from "./CommentItem";

const LoungeDetail = ({ id }: { id: string }) => {
  return (
    <Container>
      <MainContainer>
        <Content>
          {/* <Stack>질문</Stack> */}
          <TitleText>
            ✨[리액트 네이티브 프론트 개발자 모집]✨ 1달 내로 마무리 예정인
            플젝입니다!! 플젝 경험/배포 운영하기 최적의 조건을 갖춘 사이드
            프로젝트 팀원 모집합니다!
          </TitleText>
          <InfoContainer>
            <p>작성자 | 12분전</p>
          </InfoContainer>

          <div>
            팀원들이 오픈소스를 활용해서 한번도 프로젝트를 안해봤어요 저도
            마찬가지로 2학년때 프로젝트 몇개 해본것 밖에 없는데 어떻게
            해야할까요 시작하는 법을 모르겠습니다 일단 자바스크립트 쪽 지도 관련
            소프트웨어를 한다고 정해두긴 했는데 어떤 소프트웨어를 써야할지
            모르겠네요 완전 초짜 프로그래머들이 사용해야할 오픈 소스들이 뭐가
            있을까요?
          </div>
        </Content>
        <CommentHeaderContainer>
          <p>댓글</p>
        </CommentHeaderContainer>

        <CommentContainer>
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </CommentContainer>
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 8fr 3fr;
  column-gap: 70px;
  row-gap: 30px;

  padding-bottom: 100px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-bottom: 0px;
  }
`;

const MainContainer = styled.div``;

const CommentContainer = styled.div`
  display: grid;
  row-gap: 15px;
  @media screen and (max-width: 768px) {
    padding: 0px 20px;
  }
`;

const InfoContainer = styled.div`
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

const Content = styled.div`
  line-height: 160%;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    padding: 0px 20px;
  }
`;

const TitleText = styled.p`
  font-size: 21px;
  font-weight: 600;
  line-height: normal;
`;

const CommentHeaderContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  p {
    font-size: 22px;
    font-weight: 600;
    line-height: normal;
  }
  border-bottom: 1px solid rgb(215, 226, 235);

  @media screen and (max-width: 768px) {
    padding: 15px 20px;
  }
`;

export default LoungeDetail;
