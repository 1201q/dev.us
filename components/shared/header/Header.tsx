import { mobileMenuSelectorVisibleAtom } from "@/context/atom";
import { IconMenu, IconUser, IconX } from "@/public/svgs";
import { authService } from "@/utils/firebase/client";

import { signOut } from "firebase/auth";
import { useAtom } from "jotai";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";

const HEADER_HEIGHT = 66;
const MOBILE_HEADER_HEIGHT = 60;

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
            <NavContainer>
              <NavMenu href={"/team"} $select={url.split("/")[1] === "team"}>
                모임
              </NavMenu>
              <NavMenu
                href={"/lounge"}
                $select={url.split("/")[1] === "lounge"}
              >
                라운지
              </NavMenu>
              <NavMenu href={"/quiz"} $select={url === "/quiz"}>
                퀴즈 라운지
              </NavMenu>
            </NavContainer>
          )}
        </Flex>
        {menuVisible && (
          <Flex>
            <MobileBurgerBtn
              onClick={() => {
                setMobileMenuVisible((prev) => !prev);
              }}
            >
              {mobileMenuVisible ? (
                <IconX width={20} height={20} style={{ marginRight: "2px" }} />
              ) : (
                <IconMenu width={27} height={27} />
              )}
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
      <AnimatePresence>
        {mobileMenuVisible && (
          <MobileMenu
            isLogin={isLogin}
            url={url}
            mobileMenuVisible={mobileMenuVisible}
          />
        )}
      </AnimatePresence>
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
    height: ${MOBILE_HEADER_HEIGHT}px;
  }
`;

const Margin = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.theme.mediaQuery.pcWidth};
  height: ${HEADER_HEIGHT}px;
  margin: ${(props) => props.theme.mediaQuery.pcMargin};
  background-color: white;

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

const NavContainer = styled.div`
  display: flex;
  margin-top: 11px;
  margin-left: 40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenu = styled(Link)<{ $select: boolean }>`
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
