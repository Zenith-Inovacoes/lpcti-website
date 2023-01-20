import * as S from './partners-styles';
import Typography from '@/components/Typography/Typography';
import zenithLogo from '@/assets/images/IOT_Zenith_Logo_Sketch 300x300.png'
import SectionTitle from '@/components/SectionTitle/Index';
import Image from 'next/image';

export default function PartnersArea() {
    
    return (
        <S.background>
            <SectionTitle>
            <Typography variant='h4' color='#29156D'>
                Nossos <Typography variant='h4' color='#0696CA' display='inline'>Parceiros</Typography>
            </Typography>
            </SectionTitle>
            <S.divImage>
                <S.zenithImage>
                <Image alt='zenith' src={zenithLogo}></Image>
                </S.zenithImage>
            </S.divImage>
        </S.background>
    );
}

