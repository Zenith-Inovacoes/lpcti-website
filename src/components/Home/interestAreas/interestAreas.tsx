import * as S from './interestAreas-styles';
import Typography from '@/components/Typography/Typography';
import Card from '@/components/Card/Card';
import cicleCard from '@/assets/images/tech-circle.svg'
import userIcon from '@/assets/icons/user-icon.svg'
import userBackground from '@/assets/images/userBackground.svg'
import iot from '@/assets/images/IOT LINES 1.png'
import iot2 from '@/assets/images/IOT LINES 2.png'
import iot3 from '@/assets/images/IOT LINES 3 R.png'
import iot4 from '@/assets/images/IOT LINES 4 L.png'
import Image from 'next/image';

export default function InterestAreas () {

    return (
        <S.background>
            <S.iotImg>
                <Image alt='Imagem de pontos que simbolizam linhas de conexão' src={iot2} />
                <Image alt='Imagem de pontos que simbolizam linhas de conexão' src={iot} />
            </S.iotImg>
            <S.iotImgMax>
                <Image alt='Imagem de pontos que simbolizam linhas de conexão' src={iot4} />
                <Image alt='Imagem de pontos que simbolizam linhas de conexão' src={iot3} />
            </S.iotImgMax>
            <S.divText>
                <Typography variant='h4' color='#29156D'>
                    Áreas de <Typography variant='h4' color='#00C0F0' display='inline'> interesse</Typography>
                </Typography>
            </S.divText>
            <S.cardPosition>
                <Card.Root variant='primary'>
                    <S.divImage>
                        <Image alt='tech circle' src={cicleCard}></Image>
                        <Image alt='background' src={userBackground} width={130}></Image>
                        <Image alt='user icon' src={userIcon} width={70}></Image>
                    </S.divImage>
                    <S.cardText>
                        <Typography variant='h3' color='#29156D'>Lorem Ipsum</Typography>
                        <Typography variant='h6' weight='250' color='#29156D'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia...
                        </Typography>
                    </S.cardText>
                </Card.Root>
            </S.cardPosition>
        </S.background>
    );
}

