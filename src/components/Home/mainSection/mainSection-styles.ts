import styled from "styled-components";
import * as S from "@/components/Typography/styles";


export const sectionBackground = styled.div`
  transform: skewY(-30deg);
  background: rgb(22, 25, 87);
  background: linear-gradient(
    90deg,
    rgba(22, 25, 87, 1) 0%,
    rgba(9, 9, 121, 1) 14%,
    rgba(148, 0, 231, 1) 100%
  );
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  padding-bottom: 15rem;
  margin: 0;
  position: relative;
  align-items: center;

  > img {
    position: absolute;
    height: auto;
    width: calc(45% + 100px);
    bottom: -25%;
    transform: skewY(30deg);
  }

  @media (min-width: 650px) {
    position: static;
    padding: 0%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    transform: skewY(-3deg);
    > img {
      width: 35vw;
      transform: translateY(45%) skewY(3deg);
      position: static;
    }
  }
  @media (min-width: 900px) {
    position: static;
    padding: 0%;
    display: flex;
    flex-direction: row;
    transform: skewY(-3deg);
    > img {
      width: calc(30% + 105px);
      transform: translateY(30%) skewY(3deg);
      position: static;
    }
  }
`;

export const divText = styled.div`
  align-content: center;
  text-align: center;
  min-width: 21.875rem;
  margin: 2.5rem;
  margin-bottom: 0;
  transform: skewY(30deg);
  > ${S.TypographyRoot} {
    display: inline-block;
    margin: 20px 0;

    > em {
      color: #00C0F0;
    }
  }
  @media (min-width: 650px) {
    width: 30%;
    margin: 1rem;
    margin-right: 3.5rem;
    padding-top: 3.5rem;
    transform: skewY(3deg);
    text-align: left;
  }
  @media (min-width: 900px) {
    margin-right: calc(10vw);
    transform: skewY(3deg);
    width: 45vw !important;
    > ${S.TypographyRoot}:first-child > ${S.TypographyRoot} {
      text-align: left;
      font-size: 2rem;
    }
    > ${S.TypographyRoot}:first-child {
      text-align: left;
      font-size: 2rem;
    }
    > ${S.TypographyRoot}:not(:first-child) {
      text-align: left;
    }
  }
  @media (min-width: 1400px) {
    margin-right: calc(10vw);
    transform: skewY(3deg);
    max-width: 40vw;
    width: 45vw !important;
    > ${S.TypographyRoot}:first-child > ${S.TypographyRoot} {
      text-align: left;
      font-size: 3rem;
    }
    > ${S.TypographyRoot}:first-child {
      text-align: left;
      font-size: 3rem;
    }
    > ${S.TypographyRoot}:not(:first-child) {
      text-align: left;
      font-size: 1.2rem;
    }
  }
`;

export const background = styled.div`
  background-color: white;
  width: 100%;
`;
export const skewAjust = styled.div`
  position: absolute;
  background: rgb(22, 25, 87);
  background: linear-gradient(
    90deg,
    rgba(22, 25, 87, 1) 0%,
    rgba(9, 9, 121, 1) 14%,
    rgba(148, 0, 231, 1) 100%
  );
  height: 235px;
  width: 100%;
  right: 0%;
  top: 0%;
  z-index: 0;
  @media (min-width: 650px) {
    height: 170px;
  }
`;
