import React from "react";
import * as S from './styles';
import Image from "next/image";
import LCPTI_Logo from '@/assets/images/lpcti.svg'

function NavBar() {
    return (
        <S.Container>
            <S.imgContainer> 
                <Image height={100} width={100} alt="Logo do LPCTI" src={LCPTI_Logo}/>
            </S.imgContainer>
        </S.Container>
    )
}

export default NavBar;