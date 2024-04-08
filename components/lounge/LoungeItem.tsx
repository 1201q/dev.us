import { IconComment } from "@/public/svgs";
import Link from "next/link";
import styled from "styled-components";

const LoungeItem = ({ title }: { title: string }) => {
  return (
    <Container>
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
          <IconComment width={11} height={11} />
          <p>1</p>
        </Flex>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  background: none;

  cursor: pointer;
  position: relative;
  padding: 18px 0px;
  border-bottom: 1px solid ${(props) => props.theme.color.border_gray};

  @media screen and (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderText = styled(Link)`
  height: auto;
  font-size: 16px;
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
  font-size: 12px;
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
    font-size: 12px;
    font-weight: 300;
    color: ${(props) => props.theme.color.f_lightGray};
  }

  svg {
    fill: ${(props) => props.theme.color.f_lightGray};
    margin-right: 4px;
  }
`;

export default LoungeItem;
