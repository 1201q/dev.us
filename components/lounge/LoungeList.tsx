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

const Container = styled.div`
  margin-top: 20px;
  padding-bottom: 50px;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 32px;

  p {
    font-size: 22px;
    font-weight: 800;
  }
`;

const ListContainer = styled.div`
  display: grid;
  row-gap: 15px;
`;

export default LoungeList;
