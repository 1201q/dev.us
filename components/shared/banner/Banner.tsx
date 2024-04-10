import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner = ({
  firstText,
  secondText,
  img,
}: {
  firstText: string;
  secondText: string;
  img: string;
}) => {
  return (
    <Container>
      <TextContainer>
        <p>{firstText}</p>
        <p>{secondText}</p>
      </TextContainer>
      <ImgContainer>
        <Image
          style={img === "banner2" ? { transform: `scale(0.74)` } : {}}
          src={require(`@/public/${img}.png`)}
          alt="배너"
          width={300}
          height={300}
          quality={100}
        />
      </ImgContainer>
    </Container>
  );
};
const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  background-color: ${(props) => props.theme.color.bg_lightGray2};

  overflow: hidden;

  @media screen and (max-width: 450px) {
    height: 120px;
    border-radius: 0px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 451px) and (max-width: 767px) {
    height: 200px;
    border-radius: 0px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) and (max-width: 1149px) {
    height: 200px;
    border-radius: 20px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1150px) {
    height: 320px;
    border-radius: 20px;
    margin-bottom: 40px;
  }
`;

const TextContainer = styled.div`
  z-index: 2;
  p {
    line-height: 130%;
    font-weight: 700;
  }

  @media screen and (max-width: 450px) {
    margin-left: 20px;
    margin-bottom: 30px;
    p {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 451px) and (max-width: 767px) {
    margin-left: 30px;
    margin-bottom: 60px;
    p {
      font-size: 26px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1149px) {
    margin-left: 40px;
    margin-bottom: 20px;
    p {
      font-size: 32px;
      font-weight: 700;
    }
  }

  @media screen and (min-width: 1150px) {
    margin-left: 70px;
    margin-bottom: 50px;
    p {
      font-size: 42px;
    }
  }
`;

const ImgContainer = styled.div`
  position: absolute;
  z-index: 1;

  @media screen and (max-width: 450px) {
    right: 0px;
    bottom: -40px;
    img {
      width: 150px;
      height: 150px;
    }
  }

  @media screen and (min-width: 451px) and (max-width: 1149px) {
    right: 0px;
    bottom: -80px;
    img {
      width: 260px;
      height: 260px;
    }
  }

  @media screen and (min-width: 1150px) {
    right: 80px;

    img {
      width: 280px;
      height: 280px;
    }
  }
`;

export default Banner;
