import styled from "styled-components";
import LoungeList from "./LoungeList";
import LoungeSide from "./LoungeSide";

const RoungePage = () => {
  return (
    <Container>
      <LoungeList />
      <LoungeSide />
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

export default RoungePage;
