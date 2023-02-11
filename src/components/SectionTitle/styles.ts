import styled from "styled-components";

interface props {
  variant?: string
}

  export const SectionTitle = styled.div<props>`
  display: flex;
  flex-direction: row;
  background: rgb(19,21,95);
  background: ${props => props.variant == 'secondary' ? 'radial-gradient(circle, rgba(20,22,94,1) 17%, rgba(0,192,240,0.5354516806722689) 50%, rgba(164,0,255,0) 87%)' : 'transparent'};
  justify-content: ${props => props.variant == 'secondary' ? 'center' : 'space-between'};
  border-radius: 50px;
  align-items: center;
  width: 100%;
  text-align: center;
  margin: 10px 0;
`;

export const SectionTitleLine = styled.span`
  width: 20%;
  height: 1px;
  background-color: black;
`;