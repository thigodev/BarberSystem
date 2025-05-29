import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Container = styled.div`
  min-height: 100vh;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 800px;
  width: 100%;
  animation: ${fadeIn} 1.2s ease-out;
`

export const LogoContainer = styled.div`
  margin-bottom: 3rem;
  
  img {
    width: 120px;
    height: auto;
    filter: brightness(0) invert(1); /* Torna a logo branca */
    
    @media (max-width: 768px) {
      width: 100px;
    }
    
    @media (max-width: 480px) {
      width: 80px;
    }
  }
`

export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 4.5rem;
  font-weight: 400;
  color: #FFFFFF;
  margin: 0;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
`

export const Subtitle = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: #CCCCCC;
  margin-bottom: 3rem;
  position: relative;
  padding: 0 3rem;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 2.5rem;
    height: 1px;
    background: #CCCCCC;
  }
  
  &::before {
    left: 0;
  }
  
  &::after {
    right: 0;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 2.5rem;
    
    &::before,
    &::after {
      width: 2rem;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0 2rem;
    
    &::before,
    &::after {
      width: 1.5rem;
    }
  }
`

export const ButtonContainer = styled.div`
  margin-bottom: 3rem;
`

export const EntrarButton = styled.button`
  background: #FFFFFF;
  color: #000000;
  border: none;
  padding: 1rem 3rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background: #F0F0F0;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 2.5rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 2rem;
    font-size: 0.8rem;
  }
`

export const Description = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #AAAAAA;
  line-height: 1.6;
  max-width: 600px;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    br {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.5;
  }
`
