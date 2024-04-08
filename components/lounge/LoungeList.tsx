import styled from "styled-components";
import LoungeItem from "./LoungeItem";

const LoungeList = () => {
  return (
    <Container>
      <ListHeader>
        <p>라운지 최신 글</p>
      </ListHeader>
      <ListContainer>
        <LoungeItem title="1" />
        <LoungeItem title="1" />
        <LoungeItem title="1" />
        <LoungeItem title="1" />
        <LoungeItem title="1" /> <LoungeItem title="1" />
        <LoungeItem title="1" />
        <LoungeItem title="1" />
      </ListContainer>
    </Container>
  );
};

const Container = styled.div``;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 32px;

  p {
    font-size: 22px;
    font-weight: 800;
  }

  @media screen and (max-width: 768px) {
    padding: 0px 20px;
  }
`;

const ListContainer = styled.div`
  display: grid;
  gap: 0px;

  @media screen and (max-width: 768px) {
    row-gap: 0px;
  }
`;

export default LoungeList;
