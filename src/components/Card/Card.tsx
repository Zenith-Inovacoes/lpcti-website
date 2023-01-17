import { CardBodyProps, CardHeaderProps, CardRootProps } from "./types"
import * as S from './styles'

function CardRoot({children, variant}: CardRootProps) {
    return(
        <S.Card variant={variant}>
            {children}
        </S.Card>
    )
}

function CardHeader({children}: CardHeaderProps) {
    return(
        <S.CardHeader>
            {children}
        </S.CardHeader>
    )
}

function CardBody({children}: CardBodyProps) {
    return(
        <S.CardBody>
            {children}
        </S.CardBody>
    )
}

const Card = {
    Root: CardRoot,
    Header: CardHeader,
    Body: CardBody,
}

export default Card