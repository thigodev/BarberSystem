import styled, { keyframes } from "styled-components";
import { border, shade } from "polished";
import LandingBackground from "../../assets/#000000.png.png";
import LandingImg from "../../assets/landing.jpg";



export const Container = styled.div`
  height: 100vh;
  display: flex;

  justify-content: space-between  ;
  gap: 3rem;
  position: relative;
  background: url(${LandingBackground}) no-repeat ;
  background-size: cover;
  `;



export const Content = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;
const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;



export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${appearFromLeft} 1s;

  img {
  width: 800px;
  margin-bottom: -36rem;

  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 480px) {
    width: 120px;
      
  }
    
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  > a {
    color: #38ada9;
    display: block;
    margin-top: 10px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, "#38ada9")};
    }
  }
`;




export const TextIntro = styled.div`
  width: 55%;
  margin: 0 auto; /* Centraliza o container */
  text-align: center; /* Centraliza o conteúdo de texto */
  margin-bottom: 2rem;

  h1 {
    display: flex;
    justify-content: center; /* Centraliza o conteúdo flexível */
    color: #FFFFFF;
    font-size: 80 px;
    font-weight: 110;
    text-decoration: bold;
    width: 500%; /* Ajustando para não ultrapassar os limites */
    padding-bottom: 2rem;
    flex-wrap: wrap; /* Corrigido erro de sintaxe */
    word-break: break-word;
    font-family: "Girassol", serif; /* Adicionando a fonte Girassol */
  }

  p {
    font-size: 30px;
    width: 500%; /* Ajustando para melhor responsividade */
    color: #FFFFFF;
  }

  @media (max-width: 1368px) {
    margin-right: 0; /* Removendo margem lateral */
    
    h1 {
      font-size: 50px;
      width: 100%;
    }

    p {
      font-size: 14px;
      width: 90%;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 40px;
    }

    p {
      font-size: 16px;
    }
  }
`;


export const ButtonRow = styled.div`
margin-left: 190%;

h1{
  padding: 30px 15px 50px;
}
  width: 10rem;
  display: flex;
  font-size: 1.5rem;
  color: transparent;

`;

export const Backgroud = styled.div`
  bottom: 0;
  right: 0;
  position: absolute;
  width: 35%;
  height: 70%;
  background-size: cover;
`;

export const pedroLogo = styled.img`
  width: 180px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 480px) {
    width: 120px;
  }
`;