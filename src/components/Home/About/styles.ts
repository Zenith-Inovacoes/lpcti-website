import styled from "styled-components";
import * as S from "@/components/Typography/styles";

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  background-color: #161957;
  padding: 50px 40px 20px 40px;
  transform: skewY(-5deg);
  margin-bottom: 20px;

  > * {
    transform: skewY(5deg);
  }

  > img {
    width: 80%;
    height: auto;
  }

  @media (min-width: 600px) {
    padding: 50px 80px 20px 80px;

    > img {
      width: 70%;
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;
    padding: 20px 60px 0 60px;
    text-align: left;
    > img {
      width: 50%;
    }
  }
`;

export const TextContainer = styled.div`
  padding: 0 40px;

  @media (min-width: 900px) {
    padding: 0 60px;
  }

  @media (min-width: 1200px) {
    padding: 0 100px;
  }
`;

export const AboutText = styled.div`
  padding: 25px 0;
  > ${S.TypographyRoot} {
    padding: 15px 0;
    line-height: 1.5rem;
  }

  @media (min-width: 1200px) {
    width: 70%;
  }
`;

export const FixSkew = styled.div`
  position: absolute;
  height: 50%;
  width: 100%;
  background-color: #161957;
  bottom: -60px;
  right: 0;
  z-index: -1;
  @media (min-width: 900px) {
    transform: skewY(3deg);
  }
`;
