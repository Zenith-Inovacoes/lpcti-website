import * as S from './contactArea-styles';
import Typography from '@/components/Typography/Typography';
import Card from '@/components/Card/Card';
import wlpcti from '@/assets/images/lpcti-white.svg'
import Image from 'next/image';

export default function ContactArea() {

    return (
        <S.background>
            <S.contacts>
                <Typography variant='h4' color='#FFF'>
                    Contato
                </Typography>
                <Image alt='LPCTI' src={wlpcti} width={100}></Image>
            </S.contacts>
        </S.background>
    );
}

