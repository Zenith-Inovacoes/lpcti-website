import styled from "styled-components";
import * as S from '@/components/Typography/styles'

export const background = styled.div`
  width: 100%;
  height: auto;
  background-color: #04051F;
`;

export const contacts = styled.div`
width: 100%;
height: auto;
display: flex;
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

