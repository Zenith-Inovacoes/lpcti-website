import { ButtonProps} from "./types"
import * as S from './styles'

export default function Button({children, variant}: ButtonProps) {
    return(
        <S.ButtonWrapper variant={variant}>
            {children}
        </S.ButtonWrapper>
    )
}
