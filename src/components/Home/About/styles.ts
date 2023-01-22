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
  margin-bottom: 60px;
  > * {
    transform: skewY(5deg);
  }
`

export const AboutText = styled.div`
  padding: 25px 0;
  > ${S.TypographyRoot} {
    padding: 15px 0;
    line-height: 1.5rem;
  }
`

export const FixSkew = styled.div`
    position: absolute;
    height: 50%;
    width: 100%;
    background-color: #161957;
    bottom: -60px;
    right: 0;
    z-index: -1;
`