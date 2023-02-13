import styled, {css} from "styled-components";
import * as S from "@/components/Typography/styles";
import * as C from "@/components/Card/styles";
import * as B from "@/components/Button/styles";

type props = {
  open: boolean;
  index: number;
  activeButton: number;
};

export const background = styled.div`
  width: 100%;
  height: auto;
  padding-top: 7rem;
  padding-bottom: 1rem;
  position: relative;
  transition: all .5s ease;
  /* z-index: -1 !important; */
  @media (min-width: 650px) {
    padding-top: 1rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const divText = styled.div`
  align-content: center;
  text-align: center;
  min-width: 21.875rem;
  padding: 2.5rem 4.5rem;
  padding-bottom: 0;
  transition: all .5s ease;
  > ${S.TypographyRoot} {
    display: inline-block;
    margin-top: 20px;
    text-align: center;

    > em {
      color: #00C0F0;
    }
  }
  @media (min-width: 820px) {
    margin: 30px 0;
  }
`;

export const cardText = styled.div`
  margin-right: 3.3rem;
  margin-left: 3.3rem;
  transition: all .5s ease;
  > ${S.TypographyRoot} {
    display: inline-block;
    margin: 20px 0;
  }
`;

export const typographyCard = styled(S.TypographyRoot)<props>`
  display: flex;
  text-align: left;
  transition: all .5s ease;
  height: 100px;
  overflow: hidden;
  animation: show-overflow 2s;
  ${({activeButton, index, open}) => activeButton == index ? css<props>`
    height: ${open ? 'auto' : '100px'};
    overflow: ${open ? 'visible' : 'hidden'};
    
    transition: all .2s ease-in-out;
  ` : css`
    transition: all .2s ease-in-out;
  `};

  @keyframes show-overflow {
  from { overflow: hidden; }
}
`;


export const iotImg = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  z-index: -1;
  > img:not(:first-child) {
    transform: skewY(-35deg);
    transform: translateY(15%);
  }
  @media (min-width: 820px) {
    > img:not(:first-child) {
      transform: skewY(-35deg);
      transform: translateY(25%);
    }
  }
  @media (min-width: 900px) {
    > img:not(:first-child) {
      transform: skewY(-35deg);
      transform: translateY(25%);
    }
  }
  @media (min-width: 900px) {
    > img {
      opacity: 0%;
      z-index: -10;
    }
  }
`;
export const iotImgMax = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  z-index: -1;
  > img {
    opacity: 0%;
    width: 0%;
  }
  @media (min-width: 900px) {
    > img:not(:first-child) {
      transform: translateY(-20%);
    }
  }
  @media (min-width: 900px) {
    > img {
      opacity: 100%;
      width: auto;
    }
  }
  @media (min-width: 950px) {
    > img:not(:first-child) {
      transform: translateY(-15%);
    }
  }
`;

export const cardPosition = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: all .5s ease;
  @media (min-width: 950px) {
    width: 50%;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    overflow-x: hidden;
    > :last-child > :last-child > :nth-child(2) {
      margin: 0rem 0rem 3rem 0rem;
      transform: translateX(30px);
    }
    > :last-child > :first-child{
      transform: translateY(-21%)
    }
  }
`;
export const divImage = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  > img:nth-child(1) {
      z-index: 10;
      
  }

  > img {
      animation: rotate 2s infinite linear;
      animation-play-state: paused;
      transition: transform 5s linear;
  }

  > img:not(:first-child) {
    position: absolute;
  }

  > img:nth-child(1):hover {
      animation: rotate 4s infinite linear;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }

  > :last-child {
    position: absolute
  }
`;

export const ButtonCard = styled(B.ButtonWrapper)<props>`
        position: relative;
      ${({activeButton, index}) => activeButton == index ? css<props>`svg {
        transform: ${({ open }) => !open ? 'rotate(0deg)' : 'rotate(180deg)'};
        transition: all .5s ease;      
      }`: css`svg {
        transition: all .5s ease;
      }`}
      
      
      
`;
