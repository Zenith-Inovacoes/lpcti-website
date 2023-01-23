import React from "react";
import * as S from './styles';
import { NavBarProps } from "./types";
import Image from "next/image";
import LCPTI_Logo from '@/assets/images/lpcti.svg'

function NavBar(props: NavBarProps) {
    return (
        <S.Container>
            <S.imgContainer> 
                <Image height={100} width={100} alt="Logo do LPCTI" src={LCPTI_Logo}/>
                {props.children}
            </S.imgContainer>
        </S.Container>
    )
}

export default NavBar;