import styled from "styled-components";
import * as S from "@/components/Typography/styles";

interface props {
  variant: string;
  color?: string;
}

function getBorderByVariant(variant: string): string {
  switch (variant) {
    case "underline":
      return "1px solid";
    default:
      return "none";
  }
}

export const LinkWrapper = styled.a<props>`
  width: auto;
  cursor: pointer;
  :hover {
    border-bottom: ${(props) => getBorderByVariant(props.variant)};
    border-color: ${(props) => props.color == undefined ? "#000" : props.color};
  }

  ${S.TypographyRoot} {
    margin: 0 5px;
    transform: translateY(-35%);
  }
`;
