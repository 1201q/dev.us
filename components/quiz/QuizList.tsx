import styled from "styled-components";

const QuizList = () => {
  return (
    <div>
      <ListHeader>
        <p>퀴즈 목록</p>
      </ListHeader>
    </div>
  );
};

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  p {
    font-size: 22px;
    font-weight: 700;
  }
`;

export default QuizList;
