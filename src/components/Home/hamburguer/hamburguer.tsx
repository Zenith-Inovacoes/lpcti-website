import React from "react";
import * as S from "./styles";
import Typography from "@/components/Typography/Typography";
import { useEffect } from "react";
import { contacts } from "../contactArea/contactArea-styles";

function Hamburguer(this: any) {
  useEffect(() => {
    const checkbox = document.getElementById("active") as HTMLInputElement;
    const Home = document.getElementById("Home");
    const Interest = document.getElementById("Interest");
    const Us = document.getElementById("Us");
    const Partner = document.getElementById("Partner");
    const Projects = document.getElementById("Projects");
    const Contact = document.getElementById("Contact");
    Home?.addEventListener("click", function check() {
      if (checkbox.checked == true) {
        checkbox.checked = false;
      }
    });
    Interest?.addEventListener("click", function check() {
      if (checkbox.checked == true) {
        checkbox.checked = false;
      }
    });
    Us?.addEventListener("click", function check() {
      if (checkbox.checked == true) {
        checkbox.checked = false;
      }
    });
    Partner?.addEventListener("click", function check() {
      if (checkbox.checked == true) {
        checkbox.checked = false;
      }
    });
    Projects?.addEventListener("click", function check() {
      if (checkbox.checked == true) {
        checkbox.checked = false;
      }
    });
    Contact?.addEventListener("click", function check() {
      if (checkbox.checked == true) {
        checkbox.checked = false;
      }
    });
  }, []);

  return (
    <>
      <S.Input type="checkbox" id="active" />
      <S.menu_btn htmlFor="active" id="click">
        <span></span>
      </S.menu_btn>
      <S.Wrapper>
        <ul>
          <li>
            <a href="#home" id="Home">
              <Typography variant="h3" weight="500" color="#fff">
                Home
              </Typography>
            </a>
          </li>
          <li>
            <a href="#interestAreas" id="Interest">
              <Typography variant="h3" weight="500" color="#fff">
                Áreas de Interesse
              </Typography>
            </a>
          </li>
          <li>
            <a href="#about" id="Us">
              <Typography variant="h3" weight="500" color="#fff">
                Sobre Nós
              </Typography>
            </a>
          </li>
          {/* <li>
            <a href="#" id="Projects">
              <Typography variant="h3" weight="500" color="#fff">
                Projetos
              </Typography>
            </a>
          </li> */}
          <li>
            <a href="#partners" id="Contact">
              <Typography variant="h3" weight="500" color="#fff">
                Parcerias
              </Typography>
            </a>
          </li>
          <li>
            <a href="#contato" id="Partner">
              <Typography variant="h3" weight="500" color="#fff">
                Contato
              </Typography>
            </a>
          </li>
        </ul>
      </S.Wrapper>
    </>
  );
}

export default Hamburguer;
