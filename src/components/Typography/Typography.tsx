import { TypographyProps } from "./types"
import * as S from './styles'

export default function Typography({children, variant, weight, color}: TypographyProps) {
    return(
        <S.TypographyRoot variant={variant} weight={weight} color={color}>
            {children}
        </S.TypographyRoot>
    )
}