import styled from "styled-components";
import * as S from "@/components/Typography/styles";

export const background = styled.div`
  width: 100%;
  margin-top: 10rem ;
  justify-content: center;
`;

export const CarrosselBackground = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const divImage = styled.div`
  align-items: center;
  border-radius: 50%;
  border: 2px solid #0696CA;
  background-color: #aaa;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: relative;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const cardText = styled.div`
  width: calc(7vw + 150px);
  height: auto;
  border-radius: 10%;
  > ${S.TypographyRoot} {
    display: inline-block;
    margin: 20px 0;
    font-size: 1rem;
  }
`;
