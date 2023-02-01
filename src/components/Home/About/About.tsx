import Typography from "@/components/Typography/Typography"
import * as S from './styles'
import CellphoneInternet from '@/assets/images/cellphone-internet.svg'
import Image from "next/image"

export default function About() {
    return (
        <S.About id="about">
            <S.TextContainer>
                <S.AboutText>
                    <Typography variant="h2" color="#FFF">
                        Sobre <em>nós</em>
                    </Typography>
                    <Typography variant="p" color="#DDD" weight="100" lineHeight={1}>
                        Com o crescimento da sociedade muita das vezes desordenado, a criação de novas tecnologias vem a auxiliar em sua organização e estruturação. Como por exemplo, técnicas de extração e análise de dados, podem vir a contribuir fornecendo insights de como se deve agir na gestão, promovendo a economia de recursos e matéria prima. Para além do aspecto financeiro, quando uma cidade começa a caminhar na trilha da inteligência, a qualidade de vida cresce, uma vez que os cidadãos são os primeiros a serem beneficiados com as novas tecnologias, ao evitarem stress, partículas nocivas suspensas no ar, alagamentos e afins, além do desenvolvimento de soluções e otimização das redes de comunicação e mobilidade urbana. Portanto, o laboratório tem a missão de promover o desenvolvimento de pesquisa aplicada e da inovação em internet das coisas e cidades inteligentes, buscando melhorar a qualidade de vida do ser humano em geral, e em particular da região Amazônica.
                    </Typography>
                </S.AboutText>
            </S.TextContainer>
            <Image src={CellphoneInternet} alt="Imagem de um celular escrito internet nele" />
            <S.FixSkew />
        </S.About>
    )
}