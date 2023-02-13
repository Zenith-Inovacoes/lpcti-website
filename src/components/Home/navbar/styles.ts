import styled from "styled-components";

export const Container = styled.nav`
  background-color: #161957;
  height: 82px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 98%);
  
  @media (min-width: 940px) {
    height: 100px;
  }
  
  > ul {
    display: none;
    position: absolute;
    right: 1%;
    list-style: none;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 940px) {
      display: block;
      float: inline-end;
    }
  }
  
  > ul li {
    float: left;
    margin: 0 1em;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
  
  > ul li a {
    text-decoration: none;
  }
  
  > ul li a p {
    transition: all ease-in-out .2s;
  }
  
  > ul li a p:hover {
    color: #00C0F0;
    transform: scale(1.1);
    transition: all .2s ease-in-out;
  }
  
  > ul li a p:active {
    transform: scale(1.25);
    transition: all .2s ease-in-out;
  }
`;

export const ImgContainer = styled.div`
  position: absolute;
  left: 0;
  display: inline-block;
  width: 49%;
  max-width: 300px;
  height: 100%;
  background-color: #fff;
  border-top-right-radius: 8em;
  border-bottom-right-radius: 8em;
  overflow-y: visible;
  
  @media (min-width: 940px) {
    border-bottom-right-radius: 1200em;
    border-top-right-radius: 13em;
  }
  
  > img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;
