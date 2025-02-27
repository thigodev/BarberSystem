import styled, { keyframes } from "styled-components";
import { shade } from "polished";
import backforgot from "../../assets/forgotback.jpg"

export const Container = styled.div`
  height: 100vh;
  background: url(${backforgot}) 100% no-repeat;
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
  background-color: #dddee2;
  box-shadow: 2px 1px 15px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 2rem;
  width: 22%;
  position: relative;
  padding: 2rem 0rem 2rem 0rem;


  img {
    margin-bottom: -3rem;
  }

`;
export const TextIntro = styled.div`
  /* margin-right: 4rem; */
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 3rem;
  /* margin-left: 60rem; */

  img {
    width: 250px !important;
  }

  h1 {
    text-align: center;
    display: flex;
    color: #3d3f41;
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
    color: #3d3f41;
  }
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

export const AnimationContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  animation: ${appearFromLeft} 1s;

  img {
    width: 1000px;
    
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
