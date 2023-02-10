import Card from "@/components/Card/Card";
import { members, directors } from "@/model/members";
import * as S from "./membersSection-styles";
import SectionTitle from '@/components/SectionTitle';
import Carrossel from "@/components/Carrossel/Carrossel"
import Typography from "@/components/Typography/Typography";


export default function MembersSection () {
  return (
    <S.background id="partners">
      <SectionTitle>
        <Typography variant='h4' color='#29156D'>
          Equipe
        </Typography>
      </SectionTitle>

      <SectionTitle variant="secondary">
        <Typography variant='h4' color='#29156D'>
          Coordenadores
        </Typography>
      </SectionTitle>

      <Carrossel.Root>
      {directors.map(({ Name, MemberPicture }, index) => (
        <Card.Root variant="secondary" key={Name}>
          <S.divImage>
            <MemberPicture />
          </S.divImage>
          <S.cardText>
            <Typography variant="h3" color="#000">
              {Name}
            </Typography>
          </S.cardText>
        </Card.Root>
      ))}
      </Carrossel.Root>

      <SectionTitle variant="secondary">
        <Typography variant='h4' color='#29156D'>
          Membros
        </Typography>
      </SectionTitle>

      <Carrossel.Root>
        {members.map(({ Name, MemberPicture }, index) => (
          <Card.Root variant="secondary" key={Name}>
            <S.divImage>
              <MemberPicture />
            </S.divImage>
            <S.cardText>
              <Typography variant="h3" color="#000">
                {Name}
              </Typography>
            </S.cardText>
          </Card.Root>
        ))}
      </Carrossel.Root>
    </S.background>
  );
}
