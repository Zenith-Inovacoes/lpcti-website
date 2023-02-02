import React from "react";
import * as S from "./styles";
import Image from "next/image";
import LCPTI_Logo from "@/assets/images/lpcti.svg";
import Typography from "@/components/Typography/Typography";
import Link from "next/link";

function NavBar() {
  return (
    <S.Container>
      <S.imgContainer>
        <Image height={100} width={100} alt="Logo do LPCTI" src={LCPTI_Logo} />
      </S.imgContainer>
      <ul>
        <li>
          <a href="#home">
            <Typography variant="h6" weight="0" color="#fff">
              Início
            </Typography>
          </a>
        </li>
        <li>
          <a href="#interestAreas">
            <Typography variant="h6" weight="0" color="#fff">
              Áreas de Interesse
            </Typography>
          </a>
        </li>
        <li>
          <a href="#about">
            <Typography variant="h6" weight="0" color="#fff">
              Sobre Nós
            </Typography>
          </a>
        </li>
        {/* <li>
          <a href="#">
            <Typography variant="h6" weight="0" color="#fff">
              Projetos
            </Typography>
          </a>
        </li> */}
        {/* <li>
          <a href="#partners">
            <Typography variant="h6" weight="0" color="#fff">
              Parcerias
            </Typography>
          </a>
        </li> */}
        <li>
          <a href="#contato">
            <Typography variant="h6" weight="0" color="#fff">
              Contato
            </Typography>
          </a>
        </li>
      </ul>
    </S.Container>
  );
}

export default NavBar;
