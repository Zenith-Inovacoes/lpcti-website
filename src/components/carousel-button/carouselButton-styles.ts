import styled from "styled-components";

export const carouselButton = styled.button`
    display: flex;
    align-items: center;
    padding: 5px 15px;
    border-radius: 30px;
    border: 1px solid white;
    background-color: #00C0F0;  
    border-radius: 30px;
    cursor: pointer;
    transition: all ease .1s;
    height: 36px;
    :hover {
        transform: scale(1.05);
        transition: all ease .2s;
    }

    :active {
        transform: scale(1);
        transition: all ease .2s;
    }
`;