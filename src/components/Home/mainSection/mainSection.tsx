import * as S from './mainSection-styles';
import Typography from '@/components/Typography/Typography';
import fotinha from '../../../assets/images/city.svg';
import Image from 'next/image';


export default function asedas() {
    return (
        <S.background>
            <S.skewAjust></S.skewAjust>
            <S.sectionBackground>
                <S.divText>
                    <Typography variant='h4' color='#FFF'>
                        Laboratório <Typography variant='h4' color='#00C0F0'> Paraense</Typography> de <Typography variant='h4' color='#00C0F0'>Cidades</Typography> e <Typography variant='h4' color='#00C0F0'>Tecnologias</Typography> Inteligentes
                    </Typography>
                    <Typography variant='h6' weight='100' color='#FFF'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam ...
                    </Typography>
                </S.divText>
                <S.divImg>
                <Image style={{ transform: 'skewY(0deg)', alignSelf: 'center', width:"100%", height:"50%"}} alt='cidade isométrica' src={fotinha}></Image>
                </S.divImg>
            </S.sectionBackground>
        </S.background>
    );
}

