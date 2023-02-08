import { ButtonProps} from "./types"
import * as S from './styles'

export function Button({children, variant, open, setOpen, setText}: ButtonProps) {
    return(
        <S.ButtonWrapper variant={variant} onClick={() => {setOpen(!open), open ?  setText('Ler menos') : setText('Ler mais')}}>
            {children}
        </S.ButtonWrapper>
    )
}

