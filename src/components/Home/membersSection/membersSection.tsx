import Card from "@/components/Card/Card";
import { members } from "@/model/members";
import * as S from "./membersSection-styles";
import SectionTitle from '@/components/SectionTitle';
import Carrossel from "@/components/Carrossel/Carrossel"
import Typography from "@/components/Typography/Typography";


export default function MembersSection () {
  return (
    <S.background id="partners">
      <Carrossel.Root>
        {members.map(({ Name, MemberDescription, MemberPicture }, index) => (
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
