import styled from "styled-components";
import * as S from "@/components/Typography/styles";

export const background = styled.div`
  width: 100%;
  height: auto;
  padding-top: 7rem;
  padding-bottom: 1rem;
  position: relative;
  z-index: -1 !important;
  @media (min-width: 650px) {
    padding-top: 1rem;
  }
`;

export const divText = styled.div`
  align-content: center;
  text-align: center;
  min-width: 21.875rem;
  padding: 2.5rem 4.5rem;
  padding-bottom: 0;
  > ${S.TypographyRoot} {
    display: inline-block;
    margin: 20px 0;
    text-align: center;
  }
  @media (min-width: 820px) {
    margin: 30px 0;
  }
`;

export const cardText = styled.div`
  margin-right: 3.3rem;
  margin-left: 3.3rem;
  > ${S.TypographyRoot} {
    display: inline-block;
    margin: 20px 0;
  }
`;
export const iotImg = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  > img:not(:first-child) {
    transform: skewY(-35deg);
    transform: translateY(15%);
  }
  @media (min-width: 820px) {
    > img:not(:first-child) {
      transform: skewY(-35deg);
      transform: translateY(25%);
    }
  }
  @media (min-width: 900px) {
    > img:not(:first-child) {
      transform: skewY(-35deg);
      transform: translateY(25%);
    }
  }
  @media (min-width: 900px) {
    > img {
      opacity: 0%;
      z-index: -10;
    }
  }
`;
export const iotImgMax = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  > img {
    opacity: 0%;
    width: 0%;
  }
  @media (min-width: 900px) {
    > img:not(:first-child) {
      transform: translateY(-20%);
    }
  }
  @media (min-width: 900px) {
    > img {
      opacity: 100%;
      width: auto;
    }
  }
  @media (min-width: 950px) {
    > img:not(:first-child) {
      transform: translateY(-15%);
    }
  }
`;

export const cardPosition = styled.div`
  display: flex;
  justify-content: center;
`;
export const divImage = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > img:not(:first-child) {
    position: absolute;
  }
`;
