import * as S from "./membersSection-styles";
import Card from "@/components/Card/Card";
import Carrossel from "@/components/Carrossel/Carrossel"
import user from "@/assets/icons/person-fill.svg";
import Typography from "@/components/Typography/Typography";
import Image from "next/image";

export default function MembersSection() {
  return (
    <S.background id="partners">
      <Carrossel.Root>
        <Card.Root variant="secondary">
          <S.divImage>
            <Image alt="tech circle" src={user} width={100} />
          </S.divImage>
          <S.cardText>
            <Typography variant="h3" color="#FFF">
              Tavares
            </Typography>
            <Typography variant="h6" weight="250" color="#FFF">
              Este é o elemento mais importante deste laboratorio, lorem lorem
              lorem lorem Este é um aspecto crucial da cidade inteligente,
              envolvendo a implementação
            </Typography>
          </S.cardText>
        </Card.Root>
        <Card.Root variant="secondary">
          <S.divImage>
            <Image alt="tech circle" src={user} width={100} />
          </S.divImage>
          <S.cardText>
            <Typography variant="h3" color="#FFF">
              Tavares
            </Typography>
            <Typography variant="h6" weight="250" color="#FFF">
              Este é o elemento mais importante deste laboratorio, lorem lorem
              lorem lorem Este é um aspecto crucial da cidade inteligente,
              envolvendo a implementação
            </Typography>
          </S.cardText>
        </Card.Root>
        <Card.Root variant="secondary">
          <S.divImage>
            <Image alt="tech circle" src={user} width={100} />
          </S.divImage>
          <S.cardText>
            <Typography variant="h3" color="#FFF">
              Tavares
            </Typography>
            <Typography variant="h6" weight="250" color="#FFF">
              Este é o elemento mais importante deste laboratorio, lorem lorem
              lorem lorem Este é um aspecto crucial da cidade inteligente,
              envolvendo a implementação
            </Typography>
          </S.cardText>
        </Card.Root>
        <Card.Root variant="secondary">
          <S.divImage>
            <Image alt="tech circle" src={user} width={100} />
          </S.divImage>
          <S.cardText>
            <Typography variant="h3" color="#FFF">
              Tavares
            </Typography>
            <Typography variant="h6" weight="250" color="#FFF">
              Este é o elemento mais importante deste laboratorio, lorem lorem
              lorem lorem Este é um aspecto crucial da cidade inteligente,
              envolvendo a implementação
            </Typography>
          </S.cardText>
        </Card.Root>
        <Card.Root variant="secondary">
          <S.divImage>
            <Image alt="tech circle" src={user} width={100} />
          </S.divImage>
          <S.cardText>
            <Typography variant="h3" color="#FFF">
              Tavares
            </Typography>
            <Typography variant="h6" weight="250" color="#FFF">
              Este é o elemento mais importante deste laboratorio, lorem lorem
              lorem lorem Este é um aspecto crucial da cidade inteligente,
              envolvendo a implementação
            </Typography>
          </S.cardText>
        </Card.Root>
        <Card.Root variant="secondary">
          <S.divImage>
            <Image alt="tech circle" src={user} width={100} />
          </S.divImage>
          <S.cardText>
            <Typography variant="h3" color="#FFF">
              Tavares
            </Typography>
            <Typography variant="h6" weight="250" color="#FFF">
              Este é o elemento mais importante deste laboratorio, lorem lorem
              lorem lorem Este é um aspecto crucial da cidade inteligente,
              envolvendo a implementação
            </Typography>
          </S.cardText>
        </Card.Root>
        <Card.Root variant="secondary">
          <S.divImage>
            <Image alt="tech circle" src={user} width={100} />
          </S.divImage>
          <S.cardText>
            <Typography variant="h3" color="#FFF">
              Tavares
            </Typography>
            <Typography variant="h6" weight="250" color="#FFF">
              Este é o elemento mais importante deste laboratorio, lorem lorem
              lorem lorem Este é um aspecto crucial da cidade inteligente,
              envolvendo a implementação
            </Typography>
          </S.cardText>
        </Card.Root>
        </Carrossel.Root>
    </S.background>
  );
}
