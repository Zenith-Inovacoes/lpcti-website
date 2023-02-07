import { useRef } from "react";
import {CarrosselProps} from "./types"
import * as S from "./styles";

function CarrosselRoot({children}: CarrosselProps) {
    return (
      <S.Carrossel>
        {children}
      </S.Carrossel>
    );
}

const Carrossel = {
    Root: CarrosselRoot,
}

export default Carrossel
