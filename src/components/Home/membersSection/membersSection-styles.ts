import styled from "styled-components";
import * as S from "@/components/Typography/styles";

export const background = styled.div`
  width: 100%;
  margin-top: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const cardPosition = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const divImage = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 360px;
  border: 1px solid;
`;

export const cardText = styled.div`
  margin-right: 3.3rem;
  margin-left: 3.3rem;
  width: 20rem;
  height: 20rem;
  > ${S.TypographyRoot} {
    display: inline-block;
    margin: 20px 0;
  }
`;
