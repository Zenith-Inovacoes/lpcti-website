import styled from "styled-components";

interface props {
  variant: string
}

export const Carrossel = styled.div`
  max-width: 100vw;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  justify-content:  ${props => props.variant == 'primary' ? 'center' : 'none'};
  margin: 3rem;
/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #00c0f0 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    background: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #00c0f0;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }      /* color of the tracking area */
`;

export const CarrosselBtn = styled.div`
`
