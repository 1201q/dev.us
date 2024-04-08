import Link from "next/link";
import styled from "styled-components";

const LoungeSide = () => {
  return (
    <Container>
      <Link href="/create/lounge">
        <NewBtn>새로운 글 작성 </NewBtn>
      </Link>
    </Container>
  );
};

const Container = styled.div``;

const NewBtn = styled.button`
  width: 100%;
  height: 45px;
  background-color: ${(props) => props.theme.color.bg_black};
  color: white;
  border-radius: 7px;
  font-size: 16px;
  font-weight: 600;
`;

export default LoungeSide;
