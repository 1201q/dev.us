import styled from "styled-components";

const CommentItem = () => {
  return (
    <Container>
      <NameText>이름</NameText>
      <CommentText>내용내용내용내용내용내용내용내용내용내용</CommentText>
      <InfoContainer>
        <p>작성자 | 12분 전</p>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgb(215, 226, 235);
  cursor: pointer;
  position: relative;
  padding-bottom: 15px;
`;

const NameText = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const CommentText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  p {
    font-size: 13px;
    font-weight: 400;
    color: ${(props) => props.theme.color.f_lightGray};
  }
`;

export default CommentItem;
