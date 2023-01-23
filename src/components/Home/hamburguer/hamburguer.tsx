import React from "react";
import * as S from './styles';
import { HamburguerProps } from "./types";
import Typography from "@/components/Typography/Typography";

function Hamburguer(props: HamburguerProps) {
    return(
        <>
        <S.Input type="checkbox" id="active" />
        <S.menu_btn htmlFor="active"><span></span></S.menu_btn>
        <S.Wrapper>
            <ul>
            <li><a href="#"><Typography variant="h3" weight="500" color="#fff">Home</Typography></a></li>
            <li><a href="#"><Typography variant="h3" weight="500" color="#fff">Áreas de Interesse</Typography></a></li>
            <li><a href="#"><Typography variant="h3" weight="500" color="#fff">Sobre Nós</Typography></a></li>
            <li><a href="#"><Typography variant="h3" weight="500" color="#fff">Projetos</Typography></a></li>
            <li><a href="#"><Typography variant="h3" weight="500" color="#fff">Contato</Typography></a></li>
            <li><a href="#"><Typography variant="h3" weight="500" color="#fff">Parcerias</Typography></a></li>
            </ul>
        </S.Wrapper>
        </>
    )
}

export default Hamburguer;