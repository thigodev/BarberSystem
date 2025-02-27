import styled, { keyframes } from "styled-components";
import { shade } from "polished";

import signInBackgroundImg from "../../assets/sign-background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  display: flex;
  justify-content: center;
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
width: 100%;
flex-direction: row;
justify-content: space-around;
margin-right: 9rem;
align-items: center;
animation: ${appearFromLeft} 1s;

img {
  width: 180px;
}

form {
  margin: 80px 0;
  width: 340px;
  text-align: center;
  label {
    color: #38ada9;
  }

  h1 {
    margin-bottom: 24px;
    color: #3d3f41;
    text-transform: capitalize;
    font-size: 28px;
    font-weight: 600;
  }

  a {
    color: #38ada9;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, "#F4EDE8")};
    }
  }
}

a {
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
    color: #079992;
  }
}
`;


export const FormContent = styled.div`
  background-color: #dddee2;
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
`;
