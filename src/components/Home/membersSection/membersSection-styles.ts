import styled from "styled-components";
import * as S from "@/components/Typography/styles";

export const background = styled.div`
  width: 100%;
  margin-top: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const divImage = styled.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid;
`;

export const cardText = styled.div`
  margin-right: 3.3rem;
  margin-left: 3.3rem;
  width: 20rem;
  height: 30rem;
  > ${S.TypographyRoot} {
    display: inline-block;
    margin: 20px 0;
  }
`;
