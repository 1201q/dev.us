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
    </Container>
  );
};

const Container = styled.div`
  padding: 22px 20px;
  background-color: white;
  height: 180px;
  border: 1px solid rgb(226, 228, 230);
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  @media screen and (min-width: 768px) {
    :hover {
      transition-duration: 0.4s;
      box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 12px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 20px 20px;
    border: none;
    box-shadow: none;
    height: 180px;
    border-radius: 0px;
  }
`;

const Contents = styled.div`
  width: 100%;
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
  color: #98a8b9;
  background-color: #f2f5f9;
  font-size: 12px;
  font-weight: 600;
  border-radius: 5px;
  margin-right: 5px;
`;

const HeaderText = styled(Link)`
  width: 100%;
  height: 44px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.2px;

  text-overflow: ellipsis;

  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  line-height: normal;
  margin-bottom: 45px;
  text-decoration: none;
  color: black;

  :hover {
    text-decoration: underline;
  }
`;

const OtherInfoContainer = styled.div`
  display: flex;

  svg {
    width: 13px;
    height: 13px;
    fill: #98a8b9;
  }
`;

const OtherInfoText = styled.p`
  color: #98a8b9;
  font-size: 13px;
  font-weight: 500;
  margin-left: 7px;
  margin-right: 20px;
`;

export default TeamItem;
