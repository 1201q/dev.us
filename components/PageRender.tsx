import styled from "styled-components";
import Header from "./Header";
import TeamPage from "./team";
import InterviewPage from "./interview";
import FilterHeader from "./team/FilterHeader";

interface PageRenderProps {
  props?: any;
}

const PageRender: React.FC<PageRenderProps> = ({ props }) => {
  return (
    <Container>
      <p style={{ position: "fixed", bottom: 0, zIndex: 200 }}>{props?.uid}</p>
      <Header url={props.url} />
      {props.url === "/team" && <FilterHeader />}
      <Contents>
        {props.url === "/team" && <TeamPage />}
        {props.url === "/interview" && <InterviewPage />}
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
  background-color: white;
  margin-top: 5px;

  @media screen and (max-width: 1150px) {
    width: ${(props) => props.theme.mediaQuery.mobileWidth};
    margin: ${(props) => props.theme.mediaQuery.mobileMargin};
  }
`;

export default PageRender;
