import { IconReply } from "@/public/svgs";
import styled from "styled-components";

const CommentItem = () => {
  const Comment = () => {
    return (
      <>
        <NameText>이름</NameText>
        <CommentText>
          내용내내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용내용내용내용내용내용내용내용내용
        </CommentText>
        <InfoContainer>
          <p>12분 전</p>
        </InfoContainer>
      </>
    );
  };
  const Reply = () => {
    return (
      <ReplyContainer>
        <ReplyLeftContainer>
          <IconReply width={18} height={18} />
        </ReplyLeftContainer>
        <ReplyCommentContainer>
          <NameText>이름</NameText>
          <CommentText>
            내용내내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용내용내용내용내용내용내용내용내용
          </CommentText>
          <InfoContainer>
            <p>12분 전</p>
          </InfoContainer>
        </ReplyCommentContainer>
      </ReplyContainer>
    );
  };

  return (
    <Container>
      {Comment()}
      {Reply()}
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

const ReplyContainer = styled.div`
  margin-top: 20px;
  display: flex;
`;

const ReplyLeftContainer = styled.div`
  width: 30px;
  padding-top: 6px;
  svg {
    fill: ${(props) => props.theme.color.f_lightGray};
  }
`;
const ReplyCommentContainer = styled.div`
  width: calc(100% - 30px);
  padding: 15px;
  border-radius: 7px;
  background-color: ${(props) => props.theme.color.bg_lightGray};
  border: 1px solid ${(props) => props.theme.color.border_gray};
`;

const NameText = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const CommentText = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 130%;
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
