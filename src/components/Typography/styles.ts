import styled from "styled-components"
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

interface props {
  variant: string
  weight?: string
  color?: string
  display?: string
}

function fontSizeByVariant(variant: string): string {
  switch (variant) {
    case "h1":
      return "3rem";
    case "h2":
      return "2.5rem";
    case "h3":
      return "2rem";
    case "h4":
      return "1.75rem";
    case "h5":
      return "1.5rem";
    case "h6":
      return "1.25rem";
    default:
      return "1rem";
  }
}

export const TypographyRoot = styled.p<props>`
  display: ${props => props.display};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => fontSizeByVariant(props.variant)};
  font-family: ${inter.style.fontFamily};
  color: ${(props) => (props.color == undefined ? "black" : props.color)};
  margin: 5px 0px;
`
