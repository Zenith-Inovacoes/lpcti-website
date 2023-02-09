import { ButtonProps} from "./types"
import * as S from './styles'

export function Button({children, variant, open, setOpen, setText}: ButtonProps) {
    return(
        <S.ButtonWrapper variant={variant} >
            {children}
        </S.ButtonWrapper>
    )
}

