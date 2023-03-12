import Card from "@/components/Card/Card";
import { members, directors } from "@/model/members";
import * as S from "./membersSection-styles";
import SectionTitle from '@/components/SectionTitle';
import Carrossel from "@/components/Carrossel/Carrossel"
import Typography from "@/components/Typography/Typography";
import { UilLinkedin } from "@iconscout/react-unicons";


export default function MembersSection () {
  return (
    <S.background id="members">
      <SectionTitle >
        <Typography variant='h4' color='#29156D'>
          Membros
        </Typography>
      </SectionTitle>
      <SectionTitle variant="secondary">
        <Typography variant='h4' color='#FFF'>
          Coordenadores
        </Typography>
      </SectionTitle>
      <Carrossel.Root variant="primary">
        {directors.map(({ Name, MemberPicture, Linkedin }, index) => (
          <Card.Root variant="secondary" key={Name}>
            <S.divImage>
              <MemberPicture />
              <S.memberDetails>
                <a href={Linkedin} target="_blank" rel="noreferrer">
                  <UilLinkedin color="#FFF" size={30} />
                </a>
              </S.memberDetails>
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
        <Typography variant='h4' color='#FFF'>
          Membros
        </Typography>
      </SectionTitle>
      <Carrossel.Root variant="secondary">
        {members.map(({ Name, MemberPicture, Linkedin }, index) => (
          <Card.Root variant="secondary" key={Name}>
            <S.divImage>
              <MemberPicture />
              <S.memberDetails className="details">
                <a href={Linkedin} target="_blank" rel="noreferrer">
                  <UilLinkedin color="#FFF" size={30} />
                </a>
              </S.memberDetails>
            </S.divImage>
            <S.cardText>
              <Typography variant="h3" color="#29156D">
                {Name}
              </Typography>
            </S.cardText>
          </Card.Root>
        ))}
      </Carrossel.Root>
    </S.background>
  );
}
