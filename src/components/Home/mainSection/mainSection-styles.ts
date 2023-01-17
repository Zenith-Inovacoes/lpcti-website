import styled from "styled-components"
import * as S from "@/components/Typography/styles"

export const sectionBackground = styled.div`
transform: skewY(-30deg);
background-image: linear-gradient(to right, #161957, #9400E7);
width: 100%;
height: 70%;
display: flex;
flex-direction: column;
padding-top: 4rem;
margin: 0;
position: relative;
align-items: center;
`
export const divText = styled.div`
align-content: center;
width: 21.875rem;
margin: 2.5rem;
margin-bottom: 2rem;
> ${S.TypographyRoot} {
    display: inline-block;
    margin: 20px 0;
}
transform: skewY(30deg);
`
export const background = styled.div`
background-color: white;
width: 100%;
height: 100%;
`
 export const skewAjust = styled.div`
position: absolute;
background-image: linear-gradient(to right, #161957, #9400E7);
height:300px;
width:100%;
right: 0%;
top: 0%;
z-index:0;
`