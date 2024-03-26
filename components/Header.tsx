import { IconMenu } from "@/public/svgs";
import Link from "next/link";
import styled from "styled-components";

const Header = ({ url }: { url: string }) => {
  return (
    <Container>
      <Margin>
        <Flex>
          <Logo href={"/"}>
            <span>dev</span>
            <span>.</span>
            <span>us</span>
          </Logo>
          <MenuContainer>
            <Menu href={"/team"} $select={url.split("/")[1] === "team"}>
              모임
            </Menu>
            <Menu href={"/lounge"} $select={url.split("/")[1] === "lounge"}>
              라운지
            </Menu>
            <Menu href={"/quiz"} $select={url === "/quiz"}>
              퀴즈 라운지
            </Menu>
          </MenuContainer>
        </Flex>
        <Flex>
          <SvgBtn>
            <IconMenu width={27} height={27} />
          </SvgBtn>
          <LoginBtn>로그인</LoginBtn>
        </Flex>
      </Margin>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  height: 66px;
  z-index: 100;
  background-color: white;

  @media screen and (max-width: 1150px) {
    height: 60px;
  }
`;

const Margin = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.theme.mediaQuery.pcWidth};
  height: 100%;
  margin: ${(props) => props.theme.mediaQuery.pcMargin};

  @media screen and (max-width: 1150px) {
    width: ${(props) => props.theme.mediaQuery.mobileWidth};
    margin: ${(props) => props.theme.mediaQuery.mobileMargin};
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const MenuContainer = styled.div`
  display: flex;
  margin-top: 11px;
  margin-left: 40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Menu = styled(Link)<{ $select: boolean }>`
  font-size: 22px;
  font-weight: 800;
  margin-right: 30px;
  cursor: pointer;
  letter-spacing: -1px;
  text-decoration: none;
  color: ${(props) =>
    props.$select ? "black" : props.theme.color.f_lightGray};
`;

const Logo = styled(Link)`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -2px;
  color: black;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

const LoginBtn = styled.button`
  width: 75px;
  height: 32px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  background-color: ${(props) => props.theme.color.bg_black};
  color: white;
  border-radius: 8px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SvgBtn = styled.button`
  display: none;
  border: none;
  background: none;
  cursor: pointer;
  margin-top: 5px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default Header;
