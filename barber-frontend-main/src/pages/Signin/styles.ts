import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom"

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background: white;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const LeftSection = styled.div`
  flex: 1;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: ${fadeInLeft} 0.8s ease-out;
  
  @media (max-width: 768px) {
    flex: none;
    min-height: 60vh;
    padding: 1.5rem;
  }
`

export const RightSection = styled.div`
  flex: 1;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeInRight} 0.8s ease-out;

  margin: 20px;
  border-radius: 8px;

  
  @media (max-width: 768px) {
    flex: none;
    min-height: 40vh;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-family: 'poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: #333333;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`

export const Subtitle = styled.p`
  font-family: 'poppins', sans-serif;
  font-size: 1rem;
  color: #666666;
  margin-bottom: 2rem;
  line-height: 1.5;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`

export const FormWrapper = styled.div`
  margin-bottom: 1.5rem;
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    /* Estilização dos inputs */
  > div {
      margin-bottom: 0.5rem;

      input {
        width: 100%;
        padding: 1rem;
        border: 1px solid #E0E0E0;
        border-radius: 8px;
        font-size: 1rem;
        font-family: 'poppins', sans-serif;
        background: #FAFAFA;
        transition: all 0.3s ease;

        &:focus {
          outline: none;
          border-color: #333333;
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(51, 51, 51, 0.1);
        }

        &::placeholder {
          color: #999999;
        }
      }
    }
    
    /* Estilização do botão */
    button {
      width: 100%;
      padding: 1rem;
      background: #000000;
      color: #FFFFFF;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      font-family: 'poppins', sans-serif;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 1rem;
      
      &:hover {
        background:rgb(226, 226, 226);
        transform: translateY(-2px);
      }
      
      &:active {
        transform: translateY(0);
      }
    }
  }
`

export const ForgotPasswordLink = styled(Link)`
  font-family: 'poppins', sans-serif;
  font-size: 0.9rem;
  color: #666666;
  text-decoration: none;
  text-align: right;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #333333;
    text-decoration: underline;
  }
`

export const SignupLink = styled.p`
  font-family: 'poppins', sans-serif;
  font-size: 0.9rem;
  color: #666666;
  text-align: center;
  margin: 0;
  
  a {
    color: #333333;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
    
    &:hover {
      color: #000000;
      text-decoration: underline;
    }
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 300px;
    height: auto;
    filter: brightness(0) invert(1); /* Torna a logo branca */
    
    @media (max-width: 768px) {
      width: 150px;
    }
    
    @media (max-width: 480px) {
      width: 120px;
    }
  }
`