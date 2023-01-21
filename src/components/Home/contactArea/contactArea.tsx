import * as S from './contactArea-styles';
import Typography from '@/components/Typography/Typography';
import Card from '@/components/Card/Card';
import instagram from '@/assets/icons/instagram-fill.svg'
import SectionTitle from '@/components/SectionTitle';
import wlpcti from '@/assets/images/lpcti-white.svg'
import Image from 'next/image';

export default function ContactArea() {

    return (
        <S.background>
            <S.contacts>
                <SectionTitle variant='secondary'>
                <Typography variant='h4' color='#FFF'>
                    Contato
                </Typography>
                </SectionTitle>
                <S.divIcons>
                </S.divIcons>
                <S.divImage>
                <Image alt='LPCTI' src={wlpcti} width={250}></Image>
                </S.divImage>
            </S.contacts>
        </S.background>
    );
}

