import * as S from "./mainSection-styles";
import Typography from "@/components/Typography/Typography";
import fotinha from "../../../assets/images/Isometric City Recort.png";
import Image from "next/image";
import { useEffect } from "react";

export default function MainSection() {
    return (
        <S.background id='home'>
            <S.skewAjust></S.skewAjust>
            <S.sectionBackground>
                <S.divText>
                    <Typography variant='h4' color='#FFF'>
                        Laboratório <em>Paraense</em> de <em>Cidades</em> e <em>Tecnologias</em> Inteligentes
                    </Typography>
                    <Typography variant='h6' weight='300' color='#FFF'>
                    O poder da tecnologia para transformar cidades: <em> a era das cidades inteligentes</em>
                    </Typography>
                </S.divText>
                <Image alt='cidade isométrica' src={fotinha} priority={true}/>
            </S.sectionBackground>
        </S.background>
    );
}