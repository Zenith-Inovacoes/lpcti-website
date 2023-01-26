import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.nav`
  background-color: #161957;
  height: 100px;
  width: 100%;
  display: flex;
  margin: 0;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 98%);
  padding: 0;
  position: fixed;
  top: 0;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 1000;
  > ul {
    @media (min-width: 940px) {
      position: absolute;
      align-items: center;
      justify-content: center;
      list-style: none;
      right: 1%;
      display: block;
      float: inline-end;
    }
    display: none;
    
    
  }
  > ul li {
    align-items: center;
    justify-content: center;
    margin-right: 1em;
    margin-left: 1em;
    flex-direction: row;
    float: left;
  }
  > ul li a {
    text-decoration: none;
  }
  > ul li a p {
    transition: all ease-in-out .2s;
  }
  > ul li a :hover{
    color: #00C0F0;
    transform: scale(1.1);
    transition: all .2s ease-in-out;
  }
  > ul li a :active {
    transform: scale(1.25);
    transition: all .2s ease-in-out;
  }
`;

export const imgContainer = styled.div`
  width: 49%;
  max-width: 300px;
  height: 100%;
  display: flex;
  background-color: #fff;
  border-top-right-radius: 8em;
  border-bottom-right-radius: 8em;
  padding: 0;
  margin: 0;
  left: 0;
  position: absolute;
  overflow-y: visible;
  display: inline-block;
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
