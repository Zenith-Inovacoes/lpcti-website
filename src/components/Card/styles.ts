import styled from "styled-components"

interface props {
    variant: string
}

export const Card = styled.div<props>`
    background-color: ${props => props.variant == 'primary' ? 'transparent' : '#161957'};
    border-radius: ${props => props.variant == 'primary' ? '0' : '50px'};
    max-width: 400px;
    padding: 10px 10px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    transform: translateX(360px);
    transition: all ease 1s;
`
export const CardHeader = styled.div`
    padding: 10px 0px;
`

export const CardBody = styled.div`
    padding: 20px 0;
`