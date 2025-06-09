import styled from "styled-components";
import userback from "../../assets/userback.jpg"
import cardback from "../../assets/back717171.png"
import elipse from "../../assets/Vector.svg"
import { FiLogOut } from "react-icons/fi";

// import { Flat } from 'react-native'

export const Container = styled.div`
min-height: 100vh;
background:rgba(25, 24, 27, 1);
`;



export const Header = styled.div`
  padding: 10px 0;
  background:rgb(0, 0, 0);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;



export const HeaderContent = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;



  > img {
    height: 80px;
    margin-right: 1rem;
  }
  h1{
    font-weight: 500;
    font-size: 32px;
    font-family: 'Montserrat';
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #dcdde1;
    cursor: default;

  }
  p{
    font-family: 'poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
}
  &:hover{

    transition: 1s;
  }
  span{
    font-family: 'poppins', sans-serif;
    background: white;
    font-weight: 400;
    font-size: 14px;
    color: black;
    padding: 6px 30px;
    border-radius: 8px;
      
   &:hover{
    transition: .6s;
    background:rgb(54, 54, 54);
    color:rgb(255, 255, 255);
  }

  }
  button {
    margin-left: 80px;
    background: transparent;
    border: 0;
    transition: box-shadow 0.3s ease-in-out;

    svg {
      display: none;
  }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;


  img {
    width: 65px;
    height: 65px;
    border-radius: 60%;
    transition: .2s;

    &:hover {
      width: 68px;
      height: 68px;
      cursor: pointer;
      }
  }

  div {
    display: flex;
    flex-wrap: wrap;
    margin-left: 16px;
    line-height: 24px;

    a {
      text-decoration: none;
      color:rgb(134, 134, 134);
      font-size: 20px;
      transition: .1s;
      margin-left: 5px;

      &:hover {
        transition: .2s;
        color: white;
      }
    }
  }
`;


export const Tittle = styled.div`
  display: flex;
  gap: .5rem;
  align-items: start;
  flex-direction: column;
  background: rgb(83, 83, 83);
  padding: 6px 100px;
  border-radius: 50px;
  margin-left: 22px;

      
    &::after {
    content: '';
    position: absolute;
    top: 15%;
    right: 18rem;
    width: 45rem;
    height: 1px;
    background:rgb(129, 129, 129);
  }
`;




export const Content = styled.div`
  width: 70%;
  margin: 3.5rem auto 0px auto;
  display: flex;
  
`;


export const FormContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 2rem;
  width: 100%;
  padding-top: 1.2rem;


  position: relative;

`;


export const Schedule = styled.div`

  /* margin-right: 120px; */
  align-items: start;
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;


  h2 {
    color:rgb(255, 255, 255);
    text-transform: uppercase;
    font-family: 'poppins';
    font-size: 16px;
    font-weight: 500;
  }

  ul{
    width: 80%;
      margin-bottom: 2rem;
  }
  p {
    margin-top: 8px;
    color:rgb(255, 255, 255);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    span + span::before {
      content: "";
      width: 1px;
      height: 12px;
      background: #404143;
      margin: 0 8px;
    }
  }
`;




export const ProviderContainer = styled.button`
  position: relative;
  transition: .1s;
  width: 100%;
  background: rgba(15, 15, 15, 1);
  padding: 18px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  border: 0;
  display: flex;
  align-items: center;
  gap: 3rem;


  &:hover{
    transition: .2s;
    transform: translateX(-5px);
  }
`;

export const ProviderAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 36px;
  margin-left: 50px;

`;
export const ProviderInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 20px;
  justify-content: space-between;
  width: 70%;
`;

export const ProviderName = styled.span`
  font-family: 'poppins', sans-serif;
  text-transform: capitalize;
  font-size: 23px;
  font-weight: 500;
  color:rgb(255, 255, 255);

`;
export const FlexProvider = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: baseline;

`;
export const ProviderMeta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 8px;
`;
export const ProviderMetaspan = styled.span`
  margin-left: 8px;
  color:rgb(255, 255, 255);

`;

export const ProviderMetaText = styled.span`
  margin-left: 8px;
  color:rgb(255, 255, 255);

`;

