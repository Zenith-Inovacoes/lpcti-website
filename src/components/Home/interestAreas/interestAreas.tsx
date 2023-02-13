import * as S from './interestAreas-styles'
import Typography from '@/components/Typography/Typography'
import Card from '@/components/Card/Card'
import cicleCard from '@/assets/images/circle-tech-5.svg'
import userBackground from '@/assets/images/userBackground.svg'
import iot from '@/assets/images/IOT LINES 1.png'
import iot2 from '@/assets/images/IOT LINES 2.png'
import iot3 from '@/assets/images/IOT LINES 3 R.png'
import iot4 from '@/assets/images/IOT LINES 4 L.png'
import Image from 'next/image'
import { UilArrowDown, UilAngleLeftB, UilAngleRightB, UilArrowCircleLeft } from '@iconscout/react-unicons'
import { useState } from 'react'
import { interestAreas } from '@/model/interest-areas'
import Carousel from 'react-bootstrap/Carousel';
import { CarouselButtonRight, CarouselButtonLeft } from '@/components/carousel-button/carousel-button'
export default function InterestAreas() {

    const [open, setOpen] = useState(false);
    const [activeButton, setActiveButton] = useState(-1);
    function changeActiveButtonOnClick(index: number) {
        if(index == activeButton) {
            setActiveButton(-1);
            console.log(index)
            console.log(activeButton)
            
            return;
        }
        if(activeButton != index && open == false) {
            setActiveButton(index);
            setOpen(true);
        }
        setActiveButton(index)
         console.log(index)
         console.log(activeButton)
         
         
    }

    function verificarEstado(open: boolean) {
        console.log(open);
    }

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
            <S.cardPosition id='teste'>
                <CarouselButtonLeft> <UilAngleLeftB /> </CarouselButtonLeft>
                <CarouselButtonRight><UilAngleRightB></UilAngleRightB> </CarouselButtonRight>
                {interestAreas.map(({cardDesc, cardTitle, CardIcon}, index) => (
                <Card.Root variant='primary' key={cardTitle}>
                    <S.divImage>
                        <Image alt='tech circle' src={cicleCard}></Image>
                        <Image alt='background' src={userBackground} width={130}></Image>
                        <CardIcon/>
                    </S.divImage>
                    <S.cardText>
                        <Typography variant='h3' color='#29156D'>{cardTitle}</Typography>
                        <S.typographyCard open={open} index={index} activeButton={activeButton} variant='h6' weight='250' color='#29156D'>
                            {cardDesc}
                        </S.typographyCard>
                    </S.cardText>
                    <S.ButtonCard activeButton={activeButton} open={open} index={index} variant={'text'} onClick={() => {verificarEstado(open), setOpen(!open), changeActiveButtonOnClick(index)}}>{activeButton == index && activeButton != -1 ? 'Ler menos' : 'Ler mais'}<UilArrowDown /></S.ButtonCard>
                </Card.Root>
                ))}
            </S.cardPosition>
        </S.background>
    );
}



            