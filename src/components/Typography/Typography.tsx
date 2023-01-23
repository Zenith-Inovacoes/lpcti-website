import { TypographyProps } from "./types"
import * as S from './styles'

export default function Typography({children, variant, weight, color, display}: TypographyProps) {
    return(
        <S.TypographyRoot variant={variant} weight={weight} color={color} display={display}>
            {children}
        </S.TypographyRoot>
    )
}