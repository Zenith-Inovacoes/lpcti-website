import styled from "styled-components";

export const Carrossel = styled.div`
  max-width: 100vw;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  flex: none;
  ::-webkit-scrollbar{
    background-color: #00C0F0;
    border-radius: 20px;
    height: 1.3vh;
    width: 90vw;

  }
  ::-webkit-scrollbar-thumb{
    background-color: black;
    border-radius: 20px;
  }
  body::-webkit-scrollbar-track {
  background: orange;        /* color of the tracking area */
}
`;

export const CarrosselBtn = styled.div`
`
