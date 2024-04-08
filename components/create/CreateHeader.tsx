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

const CreateHeader = ({ url, isLogin }: { url: string; isLogin: boolean }) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useAtom(
    mobileMenuSelectorVisibleAtom
  );

  return (
    <Container menuVisible={mobileMenuVisible}>
      <Margin>1</Margin>
    </Container>
  );
};

const Container = styled.header<{ menuVisible: boolean }>`
  position: relative;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  z-index: 100;
  background-color: white;
  border-bottom: 1px solid ${(props) => props.theme.color.border_gray};

  @media screen and (max-width: 768px) {
    height: ${(props) =>
      props.menuVisible
        ? `${MOBILE_MENU_HEIGHT + MOBILE_HEADER_HEIGHT}px}`
        : `${MOBILE_HEADER_HEIGHT}px}`};
  }
`;

const Margin = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.theme.mediaQuery.pcWidth};
  height: ${HEADER_HEIGHT}px;
  margin: ${(props) => props.theme.mediaQuery.pcMargin};

  @media screen and (max-width: 1150px) {
    width: ${(props) => props.theme.mediaQuery.mobileWidth};
    margin: ${(props) => props.theme.mediaQuery.mobileMargin};
    height: ${MOBILE_HEADER_HEIGHT}px;
  }
`;

export default CreateHeader;
