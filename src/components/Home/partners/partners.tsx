import * as S from './partners-styles';
import Typography from '@/components/Typography/Typography';
import zenithLogo from '@/assets/images/IOT_Zenith_Logo_Sketch 300x300.png'
import cesupaLogo from '@/assets/images/CESUPA_LOGO_WHITE.png'
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';

export default function PartnersArea() {
    
    return (
        <S.background id='partners'>
            <SectionTitle>
            <Typography variant='h4' color='#29156D'>
                Nossos <em>Parceiros</em>
            </Typography>
            </SectionTitle>
            <S.divImage>
                <S.zenithImage>
                    <Image alt='zenith' src={zenithLogo} />
                </S.zenithImage>
                <S.cesupaImage>
                    <Image alt='cesupa' src={cesupaLogo} />
                </S.cesupaImage>
                
            </S.divImage>
        </S.background>
    );
}

