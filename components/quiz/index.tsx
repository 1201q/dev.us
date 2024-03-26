import styled from "styled-components";
import QuizFilter from "./QuizFilter";
import QuizList from "./QuizList";

const QuizPage = () => {
  return (
    <Container>
      <QuizList />
      <QuizFilter />
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

export default QuizPage;
