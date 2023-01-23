import styled from "styled-components";
import * as S from '@/components/Typography/styles'

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
  padding-bottom: 20rem;
  margin: 0;
  position: relative;
  align-items: center;
  > img {
    position: absolute;
    height: auto;
    width: calc(60% + 100px);
    bottom: -30%;
    transform: skewY(30deg);
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
  height: 200px;
  width: 100%;
  right: 0%;
  top: 0%;
  z-index: 0;
`;
