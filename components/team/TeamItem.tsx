import styled from "styled-components";

const TeamItem = () => {
  return (
    <Container>
      <HeaderText>
        비대면 진료서비스 + 맞춤영양제 추천 등 헬스케어 서비스
      </HeaderText>
    </Container>
  );
};

const Container = styled.div`
  padding: 25px 20px;
  background-color: white;
  height: 180px;
  border: 1px solid rgb(215, 226, 235);
  border-radius: 10px;
  cursor: pointer;
`;

const HeaderText = styled.p`
  font-size: 19px;
  font-weight: 500;
  letter-spacing: -0.5px;

  :hover {
    text-decoration: underline;
  }
`;

export default TeamItem;
