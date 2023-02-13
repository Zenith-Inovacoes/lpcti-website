import styled from "styled-components";

export const carouselButtonLeft = styled.button`
    
    position: absolute;
    align-items: center;
    padding: 5px 15px;
    border-radius: 30px;
    left: 15%;
    border: 1px solid transparent;
    background-color: transparent;  
    border-radius: 30px;
    cursor: pointer;
    transition: all ease .1s;
    height: 36px;
    bottom: 40%;
    z-index: 5;
    transform: scale(1.7);
    > svg {
        color: #161957;
    }
    :hover {
        transform: scale(2.2);
        transition: all ease .2s;
    }

    :active {
        transform: scale(1.7);
        transition: all ease .2s;
    }
`;

export const carouselButtonRight = styled(carouselButtonLeft)`
    left: 77%;
`;