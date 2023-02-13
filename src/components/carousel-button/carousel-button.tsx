import { interestAreas } from "@/model/interest-areas";
import { type } from "os";
import React, { useEffect } from "react";
import styled from "styled-components";
import css from "styled-jsx/css";
import { cardPosition } from "../Home/interestAreas/interestAreas-styles";
import * as S from "./carouselButton-styles";
import { carouselButtonProps } from "./types";


export function CarouselButtonRight({children}: carouselButtonProps) {

    function translateLeft() {
        let card =  Array.from(document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>)
            let button = document.getElementById("button1") as HTMLElement;
            if(card != null && card != undefined) {
        
                card.forEach((element) => {
                    element.style.transform == "translateX(-365px)" ? element.style.transform = "translateX(360px)" : element.style.transform = "translateX(-365px)"
                })
            }
    }
    return(
        <S.carouselButtonRight onClick={() => translateLeft()}>
            {children}
        </S.carouselButtonRight>
    )
}

export function CarouselButtonLeft({children}: carouselButtonProps) {
        function translateRight() {
            let card =  Array.from(document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>)
            let button = document.getElementById("button1") as HTMLElement;
            if(card != null && card != undefined) {
                card.forEach((element) => {
                    element.style.transform == "translateX(-365px)" ? element.style.transform = "translateX(360px)" : element.style.transform = "translateX(-365px)"
                })
            }
        }
    return (
        <S.carouselButtonLeft id="button1" onClick={() => translateRight()}>
            {children}
        </S.carouselButtonLeft>
    )
}