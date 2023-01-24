import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: -100%;
    height: 100%;
    width: 100%;
    background: #161957;
    transition: all 0.6s ease-in-out;
    transition-delay: .2s;
    z-index: 1000;
    > ul {
        position: absolute;
        top: 60%;
        left: 50%;
        height: 90%;
        width: 100%;
        transform: translate(-50%, -50%);
        list-style: none;
        text-align: center;
    }
    > ul li {
        height: 10%;
        margin: 35px 0;
        text-align: center;
    }
    > ul li a {
        text-decoration: none;
        font-size: 30px;
        font-weight: 500;
        padding: 5px 30px;
        color: #fff;
        border-radius: 50px;
        position: absolute;
        margin: 5px 30px;
        opacity: 0;
        transition: all 0.875s ease;
        transition: transform .6s cubic-bezier(0.215, 0.61, 0.355, 1);
        width: 100%;
        text-align: left;
        transition: opacity .6s, transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translateX(50%);
        &::after{
            position: absolute;
            content: "";
            background: #fff;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            transform: scaleY(0);
            z-index: -1;
            transition: transform 0.3s ease;
        }
    }
    @media (min-width: 940px) {
        display: none;
    }
`

export const menu_btn = styled.label`
    position: fixed;
    z-index: 1001;
    right: 20px;
    top: 20px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    @media (min-width: 940px) {
            display: none;
        }
    > span, ::before, ::after {
        content: "";
        position: absolute;
        top: calc(50% - 1px);
        left: 30%;
        width: 40%;
        border-bottom: 2px solid rgb(255, 252, 252);
        transition: transform .6s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    ::before {
        transform: translateY(-8px);
    }
    ::after {
        transform: translateY(8px);
    }
`

export const Input = styled.input`
    
    display: none;
    :checked~${Wrapper} {
        top: 0;
        transition: all 0.6s ease-in-out;
    }
    :checked+${menu_btn} span{
        transform: scaleX(0);
    }
    :checked+ ::before{
        transform: rotate(45deg);
        border-color: #fff;
    }
    :checked+ ::after{
        transform: rotate(-45deg);
        border-color: #fff;
    }

    :checked~${Wrapper} ul li a{
        opacity: 1;
        transform: none;
        transition-timing-function: ease, cubic-bezier(.1, 1.3, .3, 1);
        transition-delay: .6s;
        transform: translateX(-50%);
    }
`