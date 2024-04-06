import styled from "styled-components";
import Header from "./shared/header/Header";
import TeamPage from "./team";
import LoungePage from "./lounge";
import FilterHeader from "./team/FilterHeader";
import TeamDetailPage from "./teamDetail";
import LoungeDetailPage from "./loungeDetail";
import QuizPage from "./quiz";

import { useAtomValue } from "jotai";
import { teamFilterHeaderVisibleAtom } from "@/context/atom";
import AuthPage from "./auth";

interface PageRenderProps {
  props?: any;
}

const PageRender: React.FC<PageRenderProps> = ({ props }) => {
  const teamFilterHeaderVisible = useAtomValue(teamFilterHeaderVisibleAtom);

  return (
    <Container>
      <p style={{ position: "fixed", bottom: 0, zIndex: 200 }}>{props?.uid}</p>
      {/* {props?.uid && (
        <button
          onClick={async () => await signOut(authService)}
          style={{
            position: "fixed",
            bottom: 10,
            right: 10,
            zIndex: 200,
            backgroundColor: "gray",
            padding: 10,
          }}
        >
          로그아웃
        </button>
      )} */}
      <Header url={props.url} isLogin={props.isLogin} />
      {props.url === "/team" && teamFilterHeaderVisible && <FilterHeader />}
      <Contents>
        {props.url === "/team" && <TeamPage />}
        {props.url.split("/")[1] === "team" && props.url.split("/")[2] && (
          <TeamDetailPage id={props.url.split("/")[2]} />
        )}
        {props.url === "/lounge" && <LoungePage />}
        {props.url.split("/")[1] === "lounge" && props.url.split("/")[2] && (
          <LoungeDetailPage id={props.url.split("/")[2]} />
        )}
        {props.url.split("/")[1] === "quiz" && <QuizPage />}

        {props.url === "/auth/login" && <AuthPage mode="login" />}
        {props.url === "/auth/signup" && <AuthPage mode="signup" />}
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Contents = styled.div`
  width: ${(props) => props.theme.mediaQuery.pcWidth};
  margin: ${(props) => props.theme.mediaQuery.pcMargin};
  min-height: 100dvh;
  background: none;
  margin-top: 10px;

  @media screen and (max-width: 1150px) {
    width: ${(props) => props.theme.mediaQuery.mobileWidth};
    margin: ${(props) => props.theme.mediaQuery.mobileMargin};
  }
`;

export default PageRender;
