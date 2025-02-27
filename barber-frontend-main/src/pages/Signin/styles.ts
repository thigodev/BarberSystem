import styled, { keyframes } from "styled-components";
import { shade } from "polished";
import SigninImg from "../../assets/signup-background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background: url(${SigninImg}) 100% no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TextIntro = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 3rem;

  img {
    width: 250px !important;
  }

  h1 {
    text-align: center;
    display: flex;
    color:rgb(255, 255, 255);
    font-size: 70px;
    font-weight: 800;
    text-decoration: bold;
    width: 201%;
    padding-bottom: 2rem;
    flex-wrap: wrap;
    word-break: break-word;
  }

  p {
    font-size: 24px;
    text-align: center;
    width: 190%;
    color:rgb(255, 255, 255);
  }

  @media (max-width: 1368px) {
    h1 {
      font-size: 50px;
      width: 150%;
    }

    p {
      font-size: 14px;
      width: 80%;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
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
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-right: 9rem;
  align-items: center;
  animation: ${appearFromLeft} 1s;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-right: 0;
  }

  img {
    width: 180px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    label {
      color:rgb(255, 255, 255);
    }

    h1 {
      margin-bottom: 24px;
      color:rgb(255, 255, 255);
      text-transform: capitalize;
      font-size: 28px;
      font-weight: 600;
    }

    a {
      color:rgb(255, 255, 255);
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#FFFFFF")};
      }
    }
  }

  a {
    color:rgb(255, 255, 255);
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
      color: gray;
    }
  }
`;

export const FormContent = styled.div`
  background-color:rgb(0, 0, 0);
  box-shadow: 2px 1px 15px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  padding: 3rem 3rem 1rem 3rem;
  flex-direction: column;

  img {
    margin-bottom: -3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    box-shadow: none;
    background-color: transparent;
    padding: 2rem 1rem;
  }
`;
