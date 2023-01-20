import * as S from './interestAreas-styles';
import Typography from '@/components/Typography/Typography';
import Card from '@/components/Card/Card';
import cicleCard from '@/assets/images/tech-circle.svg'
import userIcon from '@/assets/icons/user-icon.svg'
import userBackground from '@/assets/images/userBackground.svg'
import Image from 'next/image';

export default function InterestAreas() {

    return (
        <S.background>
            <S.divText>
                <Typography variant='h4' color='#29156D'>
                    Aréas de <Typography variant='h4' color='#00C0F0' display='inline'> interesse</Typography>
                </Typography>
                <Typography variant='h6' weight='100' color='#29156D'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam ...
                </Typography>
            </S.divText>
            <S.cardPosition>
                <Card.Root variant='primary'>
                    <S.divImage>
                        <Image alt='tech circle' src={cicleCard}></Image>
                        <Image alt='background' src={userBackground} width={130}></Image>
                        <Image alt='user icon' src={userIcon}width={70}></Image>
                    </S.divImage>
                    <Typography variant='h6' weight='100' color='#29156D'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam ...
                    </Typography>
                </Card.Root>
            </S.cardPosition>
        </S.background>
    );
}

