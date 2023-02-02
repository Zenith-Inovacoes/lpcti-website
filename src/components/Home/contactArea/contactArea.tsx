import * as S from './contactArea-styles';
import Typography from '@/components/Typography/Typography';
import wlpcti from '@/assets/images/LPCTI WHITE.png'
import { UilEnvelope } from '@iconscout/react-unicons'
import { UilPhone } from '@iconscout/react-unicons'
import { UilMapMarker } from '@iconscout/react-unicons'
import Image from 'next/image';

export default function ContactArea () {

    return (
        <S.background id='contato'>
          <S.divRow>
            <S.contacts>
                <S.typeContactsColumn>
                    <S.typeContactsRow>
                        <UilEnvelope size={23} />
                        <a href="mailto:contato@lpcti.com"><Typography variant='h6' color='#FFF'>contato@lpcti.com</Typography></a>
                    </S.typeContactsRow>
                    <S.typeContactsRow>
                        <UilMapMarker size={23}  /> 
                        <a target="_blank" href="https://goo.gl/maps/oocn4UqYoXE63fN46" rel='noreferrer'><Typography variant='h6' color='#FFF'>Av. Alcindo Cacela, 1523</Typography></a>
                    </S.typeContactsRow>
                    <S.typeContactsRow>
                        <UilPhone size={23} />
                        <a href="tel:91993040556"><Typography variant='h6' color='#FFF'>(91) 99304-0556</Typography></a>
                    </S.typeContactsRow>
                </S.typeContactsColumn>
            </S.contacts>
            <S.divImage>
                <Image alt='Logo do Laboratório' src={wlpcti} />
            </S.divImage>
            </S.divRow>
            <S.authors>
                <Typography variant='p' color='#FFF'>
                    2023 © ZENITH. Todos os direitos reservados
                </Typography>
            </S.authors>
        </S.background>
    );
}

