import * as S from './interestAreas-styles';
import Typography from '@/components/Typography/Typography';
import Card from '@/components/Card/Card';
import cicleCard from '@/assets/images/circle-tech-5.svg'
import userBackground from '@/assets/images/userBackground.svg'
import { UilTrees } from '@iconscout/react-unicons'
import { UilUniversity } from '@iconscout/react-unicons'
import { UilBusSchool } from '@iconscout/react-unicons'
import { UilChannel } from '@iconscout/react-unicons'
import iot from '@/assets/images/IOT LINES 1.png'
import iot2 from '@/assets/images/IOT LINES 2.png'
import iot3 from '@/assets/images/IOT LINES 3 R.png'
import iot4 from '@/assets/images/IOT LINES 4 L.png'
import Image from 'next/image';
import { Button } from '@/components/Button';
import { UilArrowDown } from '@iconscout/react-unicons';
import { useState } from 'react';
import { interestAreas } from '@/model/interest-areas';

export default function InterestAreas() {

    const [open, setOpen] = useState(true);
    const [text, setText] = useState('Ler mais');



    return (
        <S.background id='interestAreas'>
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
                    Áreas de <em> interesse</em>
                </Typography>
            </S.divText>
            <S.cardPosition open={open}>
                {interestAreas.map(({cardDesc, cardTitle, CardIcon}, index) => (
                <Card.Root variant='primary' key={cardTitle}>
                    <S.divImage>
                        <Image alt='tech circle' src={cicleCard}></Image>
                        <Image alt='background' src={userBackground} width={130}></Image>
                        <CardIcon/>
                    </S.divImage>
                    <S.cardText>
                        <Typography variant='h3' color='#29156D'>{cardTitle}</Typography>
                        <Typography variant='h6' weight='250' color='#29156D'>
                            {cardDesc}
                        </Typography>
                    </S.cardText>
                    <Button variant={'text'} open={open} setOpen={setOpen} text={text} setText={setText} index={0}>{text} <UilArrowDown /></Button>
                </Card.Root>))}
            </S.cardPosition>
        </S.background>
    );
}

