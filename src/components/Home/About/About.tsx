import Typography from "@/components/Typography/Typography"
import * as S from './styles'
import CellphoneInternet from '@/assets/images/cellphone-internet.svg'
import Image from "next/image"

export default function About() {
    return (
        <S.About>
            <S.TextContainer>
                <S.AboutText>
                    <Typography variant="h2" color="#FFF">
                        Sobre <Typography variant="h2" color="#00B9E9" display="inline">nós</Typography>
                    </Typography>
                    <Typography variant="p" color="#FFF" weight="100">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud.
                    </Typography>
                </S.AboutText>
                <S.AboutText>
                    <Typography variant="h5" color="#FFF" weight="bold">
                        Lorem Ipsum
                    </Typography>
                    <Typography variant="p" color="#FFF" weight="100">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud.
                    </Typography>
                </S.AboutText>
            </S.TextContainer>
            <Image src={CellphoneInternet} alt="Imagem de um celular escrito internet nele" />
            <S.FixSkew />
        </S.About>
    )
}