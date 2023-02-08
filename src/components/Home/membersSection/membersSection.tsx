import Card from "@/components/Card/Card";
import { members } from "@/model/members";
import * as S from "./membersSection-styles";
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
              <Typography variant="h3" color="#FFF">
                {Name}
              </Typography>
              <Typography variant="h6" weight="250" color="#FFF">
                {MemberDescription}
              </Typography>
            </S.cardText>
          </Card.Root>))}
      </Carrossel.Root>
    </S.background>
  );
}
