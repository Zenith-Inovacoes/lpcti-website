import { useRef } from "react";
import { CarrosselProps } from "./types"
import * as S from "./styles";

function CarrosselRoot ({children, variant}: CarrosselProps) {
  return (
      <S.Carrossel variant={variant}>
        {children}
      </S.Carrossel>
  );
}

const Carrossel = {
  Root: CarrosselRoot,
}

export default Carrossel
