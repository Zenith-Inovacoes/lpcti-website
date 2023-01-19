import * as S from './interestAreas-styles';
import Typography from '@/components/Typography/Typography';
import Card from '@/components/Card/Card';
import cicleCard from '@/assets/images/tech-circle.svg'
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
            <Card.Root variant='primary'>
            <Image alt='cidade isométrica' src={cicleCard} ></Image>
            <Typography variant='h6' weight='100' color='#29156D'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam ...
                    </Typography>
            </Card.Root>
        </S.background>
    );
}

