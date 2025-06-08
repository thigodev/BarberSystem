import styled, { keyframes } from "styled-components";
import { shade } from "polished";
import backforgot from "../../assets/forgotback.jpg"

export const Container = styled.div`
  height: 100vh;
  background: black;
  background-size: cover;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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

export const FormContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 2rem;
  width: 22%;
  position: relative;
  padding: 2rem 0rem 2rem 0rem;
  margin-bottom: 20px;  


  img {
    margin-bottom: -2rem;
    width: 170px !important;
  }

`;

export const TextIntro = styled.div`
  @media (max-width: 1368px) {
    /* margin-right: 20rem; */
    h1 {
      font-size: 50px;
      width: 150%;
    }

    p {
      font-size: 14px;
      width: 80%;
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

export const SignupLink = styled.p`
  font-family: 'poppins', sans-serif;
  font-size: 0.9rem;
  color: #666666;
  text-align: center;

  
  a {
    color: #333333;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
    
    &:hover {
      color:rgb(160, 160, 160);
      text-decoration: underline;
    }
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  animation: ${appearFromLeft} 1s;

  img {
    width: 100px;
    
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: ;
    
    h1 {
      margin-bottom: 20px;
      color:rgb(255, 255, 255);
      font-size: 28px;
    }

    p{
     font-family: 'poppins', sans-serif;
     font-size: 12px;
     margin-bottom: 40px;
     opacity: 50%

    }
  }

  a {
    color:rgb(255, 255, 255);
    }
`;
