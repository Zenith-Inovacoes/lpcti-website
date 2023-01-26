import styled from "styled-components";
import * as S from '@/components/Typography/styles'
import exp from "constants";

export const background = styled.div`
  width: 100%;
  height: auto;
  background-color: #04051F;
  padding-top: 20px;
`
export const divRow = styled.div`
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
position: relative;
width: 100%;
display: flex;
justify-content: center;
> img:not(:first-child) {
  position: absolute;
}
@media (max-width: 900px) {
> img {
    width: 50vw;
  }
}
@media (min-width: 900px) {
> img {
    width: 30vw;
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
> img {
  margin-right: 1rem;
}
> a {
  text-decoration: none;
}
`

