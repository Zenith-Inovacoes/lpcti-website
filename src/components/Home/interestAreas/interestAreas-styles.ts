import styled from "styled-components";
import * as S from '@/components/Typography/styles'

export const background = styled.div`
  width: 100%;
  height: auto;
  padding-top: 11rem;
`;

export const divText = styled.div`
  align-content: center;
  text-align: center;
  min-width: 21.875rem;
  margin: 2.5rem;
  margin-bottom: 0;
  > ${S.TypographyRoot} {
    display: inline-block;
    margin: 20px 0;
}
`;

