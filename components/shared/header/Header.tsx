import { mobileMenuSelectorVisibleAtom } from "@/context/atom";
import { IconMenu, IconUser } from "@/public/svgs";
import { authService } from "@/utils/firebase/client";

import { signOut } from "firebase/auth";
import { useAtom } from "jotai";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

const HEADER_HEIGHT = 66;
const MOBILE_HEADER_HEIGHT = 60;
const MOBILE_MENU_HEIGHT = 170;

const Header = ({ url, isLogin }: { url: string; isLogin: boolean }) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useAtom(
    mobileMenuSelectorVisibleAtom
  );
  const router = useRouter();
  const menuVisible = url.split("/")[1] !== "auth";
  useEffect(() => {
    return () => {
      setMobileMenuVisible(false);
    };
  }, []);
  return (
    <Container menuVisible={mobileMenuVisible}>
      <Margin>
        <Flex>
          <Logo href={"/"}>
            <span>dev</span>
            <span>.</span>
            <span>us</span>
          </Logo>
          {menuVisible && (
            <LinkContainer>
              <Menu href={"/team"} $select={url.split("/")[1] === "team"}>
                모임
              </Menu>
              <Menu href={"/lounge"} $select={url.split("/")[1] === "lounge"}>
                라운지
              </Menu>
              <Menu href={"/quiz"} $select={url === "/quiz"}>
                퀴즈 라운지
              </Menu>
            </LinkContainer>
          )}
        </Flex>
        {menuVisible && (
          <Flex>
            <MobileBurgerBtn
              onClick={() => {
                setMobileMenuVisible((prev) => !prev);
              }}
            >
              <IconMenu width={27} height={27} />
            </MobileBurgerBtn>
            {!isLogin && (
              <LoginBtn
                onClick={async () => {
                  if (isLogin) {
                    await signOut(authService);

                    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/logout`, {
                      method: "GET",
                    }).then(() => {
                      router.reload();
                    });
                  } else {
                    router.push("/auth/login");
                  }
                }}
              >
                로그인
              </LoginBtn>
            )}
            {isLogin && (
              <UserBtn>
                <IconUser width={27} height={27} />
              </UserBtn>
            )}
          </Flex>
        )}
      </Margin>
      {mobileMenuVisible && (
        <MenuContainer>
          <div>
            <MobileMenu
              onClick={() => {
                router.push("/team");
              }}
              $select={url.split("/")[1] === "team"}
            >
              모임
            </MobileMenu>
            <MobileMenu
              onClick={() => {
                router.push("/lounge");
              }}
              $select={url.split("/")[1] === "lounge"}
            >
              라운지
            </MobileMenu>
            <MobileMenu
              onClick={() => {
                router.push("/quiz");
              }}
              $select={url === "/quiz"}
            >
              퀴즈 라운지
            </MobileMenu>
          </div>
          <MobileMenu
            onClick={async () => {
              if (isLogin) {
                await signOut(authService);
                fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/logout`, {
                  method: "GET",
                }).then(() => {
                  router.reload();
                });
              } else {
                router.push("/auth/login");
              }
            }}
          >
            {isLogin ? "로그아웃" : "로그인"}
          </MobileMenu>
        </MenuContainer>
      )}
    </Container>
  );
};

const Container = styled.header<{ menuVisible: boolean }>`
  position: relative;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  z-index: 100;
  background-color: white;

  @media screen and (max-width: 768px) {
    height: ${(props) =>
      props.menuVisible
        ? `${MOBILE_MENU_HEIGHT + MOBILE_HEADER_HEIGHT}px}`
        : `${MOBILE_HEADER_HEIGHT}px}`};
  }
`;

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: static;
  top: 0;
  width: 100%;
  height: ${MOBILE_MENU_HEIGHT}px;

  background-color: white;
  padding: 0px 0px 10px 0px;

  border-bottom: ${(props) => `1px solid ${props.theme.color.border_gray}`};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Margin = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.theme.mediaQuery.pcWidth};
  height: ${HEADER_HEIGHT}px;
  margin: ${(props) => props.theme.mediaQuery.pcMargin};

  @media screen and (max-width: 1200px) {
    width: ${(props) => props.theme.mediaQuery.mobileWidth};
    margin: ${(props) => props.theme.mediaQuery.mobileMargin};
    height: ${MOBILE_HEADER_HEIGHT}px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const LinkContainer = styled.div`
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
  margin-bottom: 5px;
  cursor: pointer;
  letter-spacing: -1px;
  text-decoration: none;
  color: ${(props) =>
    props.$select ? "black" : props.theme.color.f_lightGray};
`;

const MobileMenu = styled.li<{ $select?: boolean }>`
  display: flex;
  align-items: center;
  height: 35px;
  font-size: 16px;
  font-weight: ${(props) => (props.$select ? "700" : "500")};

  cursor: pointer;
  letter-spacing: -1px;
  text-decoration: none;
  color: ${(props) =>
    props.$select ? "black" : props.theme.color.f_lightGray};

  padding: 0px 21px;

  :hover {
    color: black;
    transition-duration: 0.3s;
    font-weight: 700;
  }
`;

const Logo = styled(Link)`
  font-size: 32px;
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

const MobileBurgerBtn = styled.button`
  display: none;
  border: none;
  background: none;
  cursor: pointer;
  margin-top: 5px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const UserBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.bg_gray};
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.color.border_gray};

  svg {
    margin-top: 7px;
    fill: ${(props) => props.theme.color.f_lightGray};
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default Header;
