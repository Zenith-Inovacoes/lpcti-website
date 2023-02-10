import styled from "styled-components";

interface props {
  variant?: string
}

export const SectionTitle = styled.div<props>`
  display: ${props => props.variant == 'secondary' ? 'flex' : 'flex'};
  flex-direction: row;
  justify-content: ${props => props.variant == 'primary' ? 'left' : 'space-between'};
  background: rgb(0,170,213);
  background: ${props => props.variant == 'secondary' ? 'linear-gradient(93deg, rgba(0,192,240,1) 0%, rgba(255,255,255,1) 40%);' : 'transparent'};
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
