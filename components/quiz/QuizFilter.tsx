import styled from "styled-components";
import { techField, techStack } from "@/constants/options";
import { IconX } from "@/public/svgs";

const QuizFilter = () => {
  const filedOptions = ["경험", "CS지식", "기술스택"];
  const difficultyOptions = ["쉬움", "중간", "어려움"];

  const Stack = () => {
    return (
      <StackItem>
        <p>스택</p> <IconX width={8} height={8} />
      </StackItem>
    );
  };

  return (
    <Container>
      <InfoHeaderText>검색</InfoHeaderText>
      <Input as="input" type="text" placeholder="키워드 검색" />
      <InfoHeaderText>분야</InfoHeaderText>
      <SortBtn>
        <option>전체</option>
        {filedOptions.map((o) => (
          <option>{o}</option>
        ))}
      </SortBtn>
      <InfoHeaderText>난이도순</InfoHeaderText>
      <SortBtn>
        <option>전체</option>
        {difficultyOptions.map((o) => (
          <option>{o}</option>
        ))}
      </SortBtn>
      <InfoHeaderText>분야 상세</InfoHeaderText>
      <SortBtn>
        <option>전체</option>
        {techField.map((o, i) => (
          <option>{o}</option>
        ))}
      </SortBtn>
      <InfoHeaderText>기술스택 상세</InfoHeaderText>
      <SortBtn>
        <option>전체</option>
        {techStack.map((o, i) => (
          <option>{o}</option>
        ))}
      </SortBtn>
      <StackContainer>{Stack()}</StackContainer>
    </Container>
  );
};

const Container = styled.div`
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

const InfoHeaderText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.color.f_lightGray};
  margin-bottom: 7px;
`;

const SortBtn = styled.select`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 0px 5px 0px 10px;
  border-radius: 7px;
  border: ${(props) => `1px solid ${props.theme.color.border_gray}`};
  cursor: pointer;
  background-color: ${(props) => props.theme.color.bg_lightGray};
  margin-bottom: 20px;

  p {
    font-size: 14px;
    font-weight: 500;
  }
`;

const Input = styled(SortBtn)`
  width: calc(100% - 12px);
  padding: 0;
  cursor: auto;
  padding-left: 10px;
`;

const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;

  height: min-content;
  max-height: 100%;

  overflow-y: scroll;
`;

const StackItem = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 5px 8px;

  background-color: #e9ecf3;

  border-radius: 5px;
  cursor: pointer;

  p {
    color: #44576c;
    font-size: 13px;
    font-weight: 500;
    margin-right: 5px;
  }

  svg {
    fill: #44576c;
  }
`;

export default QuizFilter;
