import { IconCalendar, IconHeart, IconPeople } from "@/public/svgs";
import Link from "next/link";
import styled from "styled-components";

const TeamItem = ({ title }: { title: string }) => {
  return (
    <Container>
      <Contents>
        <HeaderText href={"/team/123123213123"}>{title}</HeaderText>

        <OtherInfoContainer>
          <IconPeople />
          <OtherInfoText>모집 4명</OtherInfoText>
          <IconCalendar />
          <OtherInfoText>14일 남음</OtherInfoText>
        </OtherInfoContainer>
      </Contents>

      <BottomContents>
        <Stack>웹 풀스택</Stack>
        <Stack>웹 풀스택</Stack>
        <Stack>웹 풀스택</Stack>
        <Stack>웹 풀스택</Stack>
      </BottomContents>
      <BookMarkBtn>
        <IconHeart width={23} height={23} fill={"#98a8b9"} />
      </BookMarkBtn>
    </Container>
  );
};

const Container = styled.div`
  padding: 22px 20px;
  background-color: white;
  height: 180px;
  border: 1px solid rgb(215, 226, 235);
  border-radius: 10px;
  cursor: pointer;
  position: relative;
`;

const Contents = styled.div`
  width: calc(100% - 40px);
`;

const BottomContents = styled.div`
  width: calc(100% - 40px);
  position: absolute;
  bottom: 22px;
  display: flex;
`;

const Stack = styled.div`
  width: max-content;
  padding: 5px 8px;
  color: #44576c;
  background-color: #e9ecf3;
  font-size: 13px;
  font-weight: 500;
  border-radius: 5px;
  margin-right: 5px;
`;

const HeaderText = styled(Link)`
  width: 100%;
  height: 66px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.2px;

  text-overflow: ellipsis;

  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  line-height: normal;
  margin-bottom: 10px;
  text-decoration: none;
  color: black;

  :hover {
    text-decoration: underline;
  }
`;

const OtherInfoContainer = styled.div`
  display: flex;

  svg {
    width: 14px;
    height: 14px;
    fill: #98a8b9;
  }
`;

const OtherInfoText = styled.p`
  color: #98a8b9;
  font-size: 15px;
  font-weight: 500;
  margin-left: 7px;
  margin-right: 20px;
`;

const BookMarkBtn = styled.button`
  position: absolute;
  background: none;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export default TeamItem;
