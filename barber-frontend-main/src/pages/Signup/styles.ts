import styled, { keyframes } from "styled-components";
import { shade } from "polished";
import SignupBackground from "../../assets/signup-background.png";


export const Container = styled.div`
  height: 100vh;
  background: url(${SignupBackground}) 100% no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const TextIntro = styled.div`
  /* margin-right: 4rem; */
  width: 300px;
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  /* margin-left: 60rem; */

  h1 {
    text-align: center;
    display: flex;
    color: #ffffff;
    font-size: 65px;
    font-weight: 800;
    text-decoration: bold;
    width: 201%;
    padding-bottom: 2rem;
    padding-left: 5px;
    flex-wrap: wrap;
    word-break: break-word;
  }
  img {
    width: 250px !important;
    margin-left: -10rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 24px;
    text-align: start;
    width: 190%;
    color: #ffffff;
  }
  @media (max-width: 1368px) {
    margin-right: 20rem;
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

// export const Backgroud = styled.div`

//   width: 35%;
//   height: 70%;
//   background: url(${LandingImg}) no-repeat center;
//   background-size: cover;
//   /* border-radius: 300px 200px 0px 300px; */

// `;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const FormContent = styled.div`
  background-color: #000000;
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

export const AnimationContainer = styled.div`
  gap: 5rem;
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    width: 180px;
  }

  form {
    margin: 80px 0px 50px 0px;
    width: 340px;
    text-align: center;
    label {
      color: #ffffff;
    }
    h1 {
      margin-bottom: 24px;
      color: #ffffff;
      text-transform: capitalize;
      font-size: 28px;
      font-weight: 600;
    }
    a {
      color: #ffffff;
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
    color: #ffffff;
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
