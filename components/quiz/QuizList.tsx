import { quizFilterVisibleAtom } from "@/context/atom";
import { useAtom } from "jotai";
import styled from "styled-components";

const QuizList = () => {
  const [quizFilterVisible, setQuizFilterVisible] = useAtom(
    quizFilterVisibleAtom
  );

  return (
    <div>
      <ListHeader>
        <p>퀴즈 목록</p>
        <FilterBtn onClick={() => setQuizFilterVisible((prev) => !prev)}>
          필터링
        </FilterBtn>
      </ListHeader>
    </div>
  );
};

const ListHeader = styled.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  p {
    font-size: 22px;
    font-weight: 700;
  }
`;

const FilterBtn = styled.button`
  @media screen and (min-width: 768px) {
    display: none;
  }

  min-width: 60px;
  height: 32px;
  border-radius: 7px;

  margin-top: 0px;
  background-color: ${(props) => props.theme.color.bg_mint};
  color: white;
  font-weight: 600;
  font-size: 14px;

  svg {
    width: 13px;
    height: 13px;
    fill: white;
    margin-left: 5px;
  }
`;

export default QuizList;
