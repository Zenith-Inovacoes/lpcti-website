import styled from "styled-components"
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const sectionBackground = styled.div`
clip-path: polygon(0 0%, 100% 0%, 100% 60%, 0 98%);
background-image: linear-gradient(to right, #161957, #9400E7);
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
margin: 0;
`
export const background = styled.div`
background-color: white;
width: 100%;
height: 100%;
`
export const mainText = styled.h1`
width: 50%;
font-family: ${inter.style.fontFamily};
color: white;
`
export const subtitleText = styled.p`
font-family: ${inter.style.fontFamily};
`
export const cityImg = styled.img`
 
`