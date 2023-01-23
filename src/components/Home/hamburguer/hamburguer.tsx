import React from "react";
import * as S from './styles';
import { HamburguerProps } from "./types";

function Hamburguer(props: HamburguerProps) {
    return(
        <>
        <S.Input type="checkbox" id="active" />
        <S.menu_btn htmlFor="active"><span></span></S.menu_btn>
        <S.Wrapper>
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Áreas de Interesse</a></li>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Parcerias</a></li>
            <li><a href="#">Contato</a></li>
            </ul>
        </S.Wrapper>
        </>
    )
}

export default Hamburguer;