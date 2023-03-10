import styled from "styled-components";
import * as S from '@/components/Typography/styles'

interface props {
  variant: string;
}

function getPaddingByVariant(variant: string): string {
  switch (variant) {
    case "rounded":
      return "10px";
    default:
      return "5px 15px";
  }
}

function getBorderRadiusByVariant(variant: string): string {
  switch (variant) {
    case "rounded":
      return "100%";
    default:
      return "30px";
  }
}

export const ButtonWrapper = styled.button<props>`
  display: flex;
  align-items: center;
  padding: ${(props) => getPaddingByVariant(props.variant)};
  border-radius: 30px;
  border: 1px solid white;
  background: transparent;
  border-radius: ${(props) => getBorderRadiusByVariant(props.variant)};
  cursor: pointer;
  transition: transform ease .1s;

  :hover {
    transform: scale(1.05);
    transition: transform ease .2s;
  }

  :active {
    transform: scale(1);
    transition: transform ease .2s;
  }

  > ${S.TypographyRoot} {
    padding: 0 10px;
  }
`;
