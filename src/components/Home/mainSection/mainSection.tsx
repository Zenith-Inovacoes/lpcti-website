import * as S from './mainSection-styles';
import Typography from '@/components/Typography/Typography';
import fotinha from '../../../assets/images/Isometric City Recort.png';
import Image from 'next/image';
import { useEffect } from 'react';


export default function MainSection() {
    
    return (
        <S.background>
            <S.skewAjust></S.skewAjust>
            <S.sectionBackground>
                <S.divText>
                    <Typography variant='h4' color='#FFF'>
                        Laboratório <Typography variant='h4' color='#00C0F0' display='inline'> Paraense</Typography> de <Typography variant='h4' color='#00C0F0' display='inline'>Cidades</Typography> e <Typography variant='h4' color='#00C0F0' display='inline'>Tecnologias</Typography> Inteligentes
                    </Typography>
                    <Typography variant='h6' weight='100' color='#FFF'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam ...
                    </Typography>
                </S.divText>
                <Image alt='cidade isométrica' src={fotinha} aspect-ratio={0.5}></Image>
            </S.sectionBackground>
        </S.background>
    );
}

