import styled from "styled-components"
import * as S from "@/components/Typography/styles"
import fotinha from '../../../assets/images/city.svg';
import Image from 'next/image';

export const sectionBackground = styled.div`
transform: skewY(-30deg);
background: rgb(22,25,87);
background: linear-gradient(90deg, rgba(22,25,87,1) 0%, rgba(9,9,121,1) 14%, rgba(148,0,231,1) 100%);
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
padding-top: 4rem;
margin: 0;
position: relative;
align-items: center;
`
export const divText = styled.div`
align-content: center;
min-width: 21.875rem;
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
background: rgb(22,25,87);
background: linear-gradient(90deg, rgba(22,25,87,1) 0%, rgba(9,9,121,1) 14%, rgba(148,0,231,1) 100%);
height:300px;
width:100%;
right: 0%;
top: 0%;
z-index:0;
`
export const divImg = styled.div`
width: 100%;
transform: skewY(30deg);
margin: 2.5rem;
justify-content: center;
`