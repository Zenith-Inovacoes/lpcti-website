import * as S from './styles'
import { SectionTitleProps } from './types'

export default function SectionTitle({ children, variant }: SectionTitleProps) {
    if (variant === undefined || variant === 'primary') {
        return (
            <S.SectionTitle>
                <S.SectionTitleLine />
                {children}
                <S.SectionTitleLine />
            </S.SectionTitle>
        )
    }
    else {
        return(
            <S.SectionTitle variant={variant}>
                {children}
            </S.SectionTitle>
        )
    }
}