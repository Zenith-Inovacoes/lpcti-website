import styled from "styled-components";

interface props {
  variant?: string
}

export const SectionTitle = styled.div<props>`
  display: ${props => props.variant == 'secondary' ? 'block' : 'flex'};
  flex-direction: row;
  justify-content: space-between;
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
