import styled from "styled-components";
import LoungeList from "./LoungeList";
import LoungeSide from "./LoungeSide";
import Banner from "../shared/banner/Banner";
import { motion } from "framer-motion";

const RoungePage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Banner
        firstText="다양한 주제로"
        secondText="이야기를 나누어보세요"
        img="banner2"
      />
      <Container>
        <LoungeList />
        <LoungeSide />
      </Container>
    </motion.div>
  );
};

const Container = styled.div`
  margin-top: 0px;
  display: grid;
  grid-template-columns: 8fr 3fr;
  column-gap: 70px;
  row-gap: 30px;

  padding-bottom: 100px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-bottom: 0px;
  }
`;

export default RoungePage;
