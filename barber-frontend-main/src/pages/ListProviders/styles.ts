import styled from "styled-components";
import userback from "../../assets/userback.jpg"
import cardback from "../../assets/back717171.png"
import elipse from "../../assets/Vector.svg"

// import { Flat } from 'react-native'

export const Container = styled.div`
min-height: 100vh;


`;



export const Header = styled.div`
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.3);
  padding: 25px 0;
  background:rgb(0, 0, 0);
  border-radius: 0rem 0rem  3rem 3rem;
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
  &:hover{

    transition: 1s;
  }
  span{

    color: #0a3d62;
    font-weight: 400;
    font-size: 32px;
  }
  button {
    margin-left: 80px;
    background: transparent;
    border: 0;
    transition: box-shadow 0.3s ease-in-out;

    svg {
      color: #dcdde1;
      width: 25px;
      height: 25px;
      transition: .2s;


    &:hover {
      transition: .2s;
      color: #626262;
    }
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
    box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.1);
    transition: .2s;
    &:hover {
      width: 68px;
      height: 68px;
      cursor: pointer;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
      }
  }

  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color:rgb(255, 255, 255);
      font-size: 18px;
    }

    a {
      text-decoration: none;
      color: #dcdde1;
      font-size: 20px;
      transition: .1s;

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
  align-items: center;
img{
  margin-top: 20px;
  width: 10px;

}
`;

export const Content = styled.div`
  width: 70%;
  margin: 3.5rem auto 0px auto;
  display: flex;
`;


export const FormContent = styled.div`
  background-color: #484848;
  box-shadow: 2px 1px 12px 4px rgba(0, 0, 0, 0.12);
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
  align-items: center;
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;

  h2 {
    color:rgb(255, 255, 255);
    text-transform: uppercase;
    font-family: 'Montserrat';
    font-size: 45px;
    font-weight: 500 ;
    letter-spacing: .3rem;
    padding-top: 1.5rem;
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
  background: url(${cardback}) 100% no-repeat;
  background-size: cover;
  box-shadow: 1px 1px 15px 1px rgba(0,0,0,0.2);
  padding: 18px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  border: 0;
  display: flex;
  align-items: center;
  gap: 3rem;


  &:hover{
    transition: .2s;
    padding: 25px 18px;
  }
`;

export const ProviderAvatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 36px;

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
  text-transform: capitalize;
  font-size: 26px;
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
  color: #404143;

`;

export const ProviderMetaText = styled.span`
  margin-left: 8px;
  color: #404143;

`;
