import { IconComment } from "@/public/svgs";
import Link from "next/link";
import styled from "styled-components";

const LoungeItem = ({ title }: { title: string }) => {
  return (
    <Container>
      <Stack>질문</Stack>
      <HeaderText href={"/lounge/1231232131231"}>
        대학에서 오픈 소스 프로젝트를 해야하는데 대학에서 오픈 소스 프로젝트를
        해야하는데 대학에서 오픈 오픈 소스 프로젝트를 해야하는데 대학에서 오픈
        소스 프로젝트를 해야하는데 대학에서 오픈
      </HeaderText>
      <ContentsText>
        팀원들이 오픈소스를 활용해서 한번도 프로젝트를 안해봤어요 저도
        마찬가지저도 마찬가지
      </ContentsText>
      <InfoContainer>
        <Flex>
          <p>작성자 | 12분 전</p>
        </Flex>
        <Flex>
          <IconComment width={13} height={13} />
          <p>1</p>
        </Flex>
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

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Stack = styled.div`
  text-align: center;
  width: 40px;
  min-width: 40px;
  height: min-content;
  padding: 4px 8px;
  color: #44576c;
  background-color: #e9ecf3;
  font-size: 13px;
  font-weight: 500;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const HeaderText = styled(Link)`
  height: auto;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.2px;

  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  line-height: normal;
  margin-bottom: 7px;
  text-decoration: none;
  color: black;

  :hover {
    text-decoration: underline;
  }
`;

const ContentsText = styled.p`
  color: #98a8b9;
  font-size: 13px;
  font-weight: 400;

  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
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

  svg {
    fill: ${(props) => props.theme.color.f_lightGray};
    margin-right: 4px;
  }
`;

export default LoungeItem;
