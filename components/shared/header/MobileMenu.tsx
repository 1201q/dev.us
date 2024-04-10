import { authService } from "@/utils/firebase/client";
import { signOut } from "firebase/auth";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import useBlockScroll from "../hooks/useBlockScroll";

const HEADER_HEIGHT = 66;
const MOBILE_HEADER_HEIGHT = 60;

const MobileMenu = ({
  url,
  isLogin,
  mobileMenuVisible,
}: {
  url: string;
  isLogin: boolean;
  mobileMenuVisible: boolean;
}) => {
  const router = useRouter();

  useBlockScroll();

  return (
    <Container
      initial={{ y: "-100%", height: 0, opacity: 0 }}
      animate={{
        y: "0%",
        height: "100%",
        opacity: 1,
        transition: { duration: 0.3, ease: [0.42, 0.0, 0.58, 1.0] },
      }}
      exit={{
        y: 0,
        height: 0,
        transition: { duration: 0.3, ease: [0.42, 0.0, 0.58, 1.0] },
      }}
    >
      {mobileMenuVisible && (
        <MenuContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.2 }}
          exit={{ opacity: 0, transition: { duration: 0.05 } }}
        >
          <Menu
            onClick={() => {
              router.push("/team");
            }}
            $select={url.split("/")[1] === "team"}
          >
            모임
          </Menu>
          <Menu
            onClick={() => {
              router.push("/lounge");
            }}
            $select={url.split("/")[1] === "lounge"}
          >
            라운지
          </Menu>
          <Menu
            onClick={() => {
              router.push("/quiz");
            }}
            $select={url === "/quiz"}
          >
            퀴즈 라운지
          </Menu>
          <Menu
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
          </Menu>
        </MenuContainer>
      )}
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  top: ${MOBILE_HEADER_HEIGHT}px;
  width: 100%;
  height: 100%;

  background-color: white;
  padding: 10px 0px 10px 0px;
  z-index: -1;

  @media screen and (min-width: 768px) {
    top: ${HEADER_HEIGHT}px;
    display: none;
  }
`;

const MenuContainer = styled(motion.ul)``;

const Menu = styled.li<{ $select?: boolean }>`
  display: flex;
  align-items: center;
  height: 48px;
  font-size: 22px;
  font-weight: ${(props) => (props.$select ? "800" : "600")};

  cursor: pointer;
  letter-spacing: -1px;
  text-decoration: none;
  color: ${(props) =>
    props.$select ? "black" : props.theme.color.f_lightGray};

  padding: 0px 23px;

  :hover {
    color: black;
    transition-duration: 0.3s;
    font-weight: 700;
  }
`;

export default MobileMenu;
