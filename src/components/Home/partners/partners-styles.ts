import styled from "styled-components";
import * as S from "@/components/Typography/styles";

export const background = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  padding-top: 5rem;

  @media (min-width: 900px) {
    padding-top: 8rem;
  }

  em {
    color: #00c0f0;
  }
`;
export const divImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

`;
export const zenithImage = styled.div`
  > img {
    height: auto;
    width: 100%;
    filter: contrast(0.1);
  }
`;

export const cesupaImage = styled.div`
  > img {
    height: 50px;
    width: 100%;
    filter: contrast(0.1);
  }
`;
