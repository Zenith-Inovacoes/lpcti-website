import * as S from './partners-styles';
import cesupaLogo from '@/assets/images/cesupa-black.svg'
import zenithLogo from '@/assets/images/zenith-black.svg'
import Image from 'next/image';

export default function PartnersArea() {
    
    return (
        <S.background>
            <S.divImage>
                <S.zenithImage>
                <Image alt='zenith' src={zenithLogo}></Image>
                </S.zenithImage>
                <S.cesupaImage>
                 <Image alt='cesupa' src={cesupaLogo}></Image>
                </S.cesupaImage>
            </S.divImage>
        </S.background>
    );
}

