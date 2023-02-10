import styled from "styled-components";

export const Carrossel = styled.div`
  max-width: 90vw;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
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
    background: black;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #00c0f0;
    border-radius: 10px;
    border: 3px solid #161957;
  } 
`;

export const CarrosselBtn = styled.div`
`



