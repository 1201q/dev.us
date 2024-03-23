import styled from "styled-components";
import TeamItem from "./TeamItem";

const TeamList = () => {
  return (
    <Container>
      <ListHeader>
        <p>현재 모집 중인 리스트</p>
        <SortBtn>
          <option>최신순</option>
          <option>마감임박순</option>
        </SortBtn>
      </ListHeader>
      <ListContainer>
        <TeamItem />
        <TeamItem />
        <TeamItem />
        <TeamItem />

        <TeamItem />
        <TeamItem />
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
  height: 100dvh;
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
  border: 1px solid lightgray;
  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 500;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default TeamList;
