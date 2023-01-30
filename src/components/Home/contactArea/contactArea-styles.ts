import styled from "styled-components";
import * as S from '@/components/Typography/styles'
import exp from "constants";

export const background = styled.div`
  width: 100%;
  height: auto;
  background-color: #04051F;
`
export const divRow = styled.div`
padding: 2rem;
@media (min-width: 900px) {
  display: flex;
 flex-direction: row-reverse;
}

`
export const contacts = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (min-width: 900px){
  margin: 2rem;
}
`
export const divImage = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 1.5rem;
> img {
    width: calc(45% + 50px);
    height: 50%;
  }
@media (min-width: 600px) {
  > img {
    width: calc(30% + 70px);
  }
}
@media (min-width: 900px) {
> img {
    width: 18vw;
    height: auto;
  }
}
`
export const authors = styled.div`
background-color: black;
height: 4rem;
display: flex;
align-items: center;
justify-content: center;
`

export const typeContactsColumn = styled.div`
display: flex;
flex-direction: column;
margin-top: 3rem;
@media (min-width: 900px){
  margin-top: 1rem;
}
`
export const typeContactsRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: left;
margin: 0.5rem;
> :first-child {
  margin-right: 1rem;
  color: white;
}
> a {
  text-decoration: none;
}
:hover * {
  color: #00C0F0;
}
@media (min-width: 900px){
  > a {
  > ${S.TypographyRoot} {
      text-align: left;
      font-size: 1rem;
}
}
}
`

