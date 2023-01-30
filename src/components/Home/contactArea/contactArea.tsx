import * as S from './contactArea-styles';
import Typography from '@/components/Typography/Typography';
import Card from '@/components/Card/Card';
import instagram from '@/assets/icons/instagram-fill.svg'
import mail from '@/assets/icons/envelope-fill.svg'
import phone from '@/assets/icons/phone-fill.svg'
import geo from '@/assets/icons/geo-alt-fill.svg'
import SectionTitle from '@/components/SectionTitle';
import wlpcti from '@/assets/images/LPCTI WHITE.png'
import Image from 'next/image';

export default function ContactArea () {

    return (
        <S.background id='contato'>
          <S.divRow>
            <S.contacts>
                <S.typeContactsColumn>
                    <S.typeContactsRow>
                        <Image alt='ícone de e-mail' src={mail} />
                        <a href="mailto:contato@lpcti.com"><Typography variant='h6' color='#FFF'>contato@lpcti.com</Typography></a>
                    </S.typeContactsRow>
                    <S.typeContactsRow>
                        <Image alt='ícone de mapa' src={geo} /> 
                        <a target="_blank" href="https://goo.gl/maps/oocn4UqYoXE63fN46"><Typography variant='h6' color='#FFF'>Av. Alcindo Cacela, 1523</Typography></a>
                    </S.typeContactsRow>
                    <S.typeContactsRow>
                        <Image alt='ícone de telefone' src={phone} />
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

