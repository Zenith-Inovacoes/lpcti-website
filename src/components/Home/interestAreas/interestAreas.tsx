import * as S from './interestAreas-styles';
import Typography from '@/components/Typography/Typography';
import Card from '@/components/Card/Card';
import cicleCard from '@/assets/images/tech-circle.png'
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

export default function InterestAreas () {

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
            <S.cardPosition>
                <Card.Root variant='primary'>
                    <S.divImage>
                        <Image alt='tech circle' src={cicleCard}></Image>
                        <Image alt='background' src={userBackground} width={130}></Image>
                        <UilChannel size='60px' color='white'/>
                    </S.divImage>
                    <S.cardText>
                        <Typography variant='h3' color='#29156D'>Gerenciamento de Cidades Inteligentes</Typography>
                        <Typography variant='h6' weight='250' color='#29156D'>
                            Este é um aspecto crucial da cidade inteligente, envolvendo a implementação de tecnologias e soluções para melhorar a eficiência dos serviços públicos, incluindo transporte, iluminação pública, gerenciamento de resíduos, segurança cidadã, entre outros.
                        </Typography>
                    </S.cardText>
                </Card.Root>
                <Card.Root variant='primary'>
                    <S.divImage>
                        <Image alt='tech circle' src={cicleCard}></Image>
                        <Image alt='background' src={userBackground} width={130}></Image>
                        <UilBusSchool size='60px' color='white'/>
                    </S.divImage>
                    <S.cardText>
                        <Typography variant='h3' color='#29156D'>Mobilidade Urbana</Typography>
                        <Typography variant='h6' weight='250' color='#29156D'>
                            A mobilidade é um dos desafios mais importantes das cidades modernas e a tecnologia inteligente pode ser utilizada para melhorar a experiência dos usuários e a eficiência do transporte, incluindo soluções como transporte autônomo, sistemas de informação para usuários de transporte e integração de diferentes modos de transporte.
                        </Typography>
                    </S.cardText>
                </Card.Root>
                <Card.Root variant='primary'>
                    <S.divImage>
                        <Image alt='tech circle' src={cicleCard}></Image>
                        <Image alt='background' src={userBackground} width={130}></Image>
                        <UilUniversity size='60px' color='white'/>
                    </S.divImage>
                    <S.cardText>
                        <Typography variant='h3' color='#29156D'>Sistemas educacionais inteligentes</Typography>
                        <Typography variant='h6' weight='250' color='#29156D'>
                            As tecnologias de inteligência artificial e machine learning podem ser usadas para desenvolver sistemas educacionais inteligentes que possam personalizar o aprendizado de cada aluno, oferecer feedback em tempo real e avaliar o progresso dos alunos de maneira mais precisa.
                        </Typography>
                    </S.cardText>
                </Card.Root>
                <Card.Root variant='primary'>
                    <S.divImage>
                        <Image alt='tech circle' src={cicleCard}></Image>
                        <Image alt='background' src={userBackground} width={130}></Image>
                        <UilTrees size='60px' color='white'/>
                    </S.divImage>
                    <S.cardText>
                        <Typography variant='h3' color='#29156D'>Sustentabilidade</Typography>
                        <Typography variant='h6' weight='250' color='#29156D'>
                            As cidades inteligentes buscam reduzir seu impacto ambiental através da implementação de soluções sustentáveis, como fontes de energia renováveis, eficiência energética, transporte verde, gerenciamento de resíduos e conservação de água.
                        </Typography>
                    </S.cardText>
                </Card.Root>
            </S.cardPosition>
        </S.background>
    );
}

