import styled from "styled-components"

interface props {
    variant: string
}

export const Card = styled.div<props>`
    background-color: transparent;
    border-radius: ${props => props.variant == 'primary' ? '0' : '50px'};
    max-width: 400px;
    padding: ${props => props.variant == 'primary' ? '10px 10px' : 'none'};
    margin: ${props => props.variant == 'primary' ? '20px' : 'none'};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
`
export const CardHeader = styled.div`
    padding: 10px 0px;
`

export const CardBody = styled.div`
    padding: 20px 0;
`