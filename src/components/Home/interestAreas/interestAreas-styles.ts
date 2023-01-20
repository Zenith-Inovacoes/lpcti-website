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

export const cardPosition = styled.div`
display: flex;
justify-content: center;
`
export const divImage = styled.div`
position: relative;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
> img:not(:first-child) {
  position: absolute;
}
`

