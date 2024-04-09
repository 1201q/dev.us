import styled from "styled-components";
import Toolbar from "./editor/Toolbar";

const HEADER_HEIGHT = 60;
const MOBILE_HEADER_HEIGHT = 60;

const CreateHeader = ({ visible }: { visible: boolean }) => {
  return (
    <Container>
      <Margin>
        <ToolbarContainer visible={visible}>
          <Toolbar />
        </ToolbarContainer>
      </Margin>
    </Container>
  );
};

const Container = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  z-index: 100;
  background-color: white;
  border-bottom: 1px solid ${(props) => props.theme.color.border_gray};
`;

const Margin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.theme.mediaQuery.pcWidth};
  height: ${HEADER_HEIGHT}px;
  margin: ${(props) => props.theme.mediaQuery.pcMargin};

  @media screen and (max-width: 1150px) {
    width: ${(props) => props.theme.mediaQuery.mobileWidth};
    margin: ${(props) => props.theme.mediaQuery.mobileMargin};
    height: ${MOBILE_HEADER_HEIGHT}px;
  }
`;

const ToolbarContainer = styled.div<{ visible: boolean }>`
  width: 330px;
  opacity: ${(props) => (props.visible ? "1" : "0.3")};
  pointer-events: ${(props) => (props.visible ? "" : "none")};
  transition-duration: 0.2s;
`;

export default CreateHeader;
