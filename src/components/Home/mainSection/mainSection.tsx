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
                        Laboratório <Typography variant='h4' color='#00C0F0' display='inline'> Paraense</Typography> de <Typography variant='h4' color='#00C0F0' display='inline'>Cidades</Typography> e <Typography variant='h4' color='#00C0F0' display='inline'>Tecnologias</Typography> Inteligentes
                    </Typography>
                    <Typography variant='h6' weight='300' color='#FFF'>
                    O poder da tecnologia para transformar cidades: <Typography variant="h6" weight="500" color="#00C0F0"> a era das cidades inteligentes</Typography>
                    </Typography>
                </S.divText>
                <Image alt='cidade isométrica' src={fotinha} />
            </S.sectionBackground>
        </S.background>
    );
}
