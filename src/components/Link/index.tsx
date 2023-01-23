import { LinkProps } from "./types";
import * as S from './styles'

export default function Link({ children, variant, color, href }: LinkProps) {
    return (
        <S.LinkWrapper variant={variant} color={color} href={href}>
            {children}
        </S.LinkWrapper>
    )
}