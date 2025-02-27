import { shade } from "polished";
import styled from "styled-components";
import profileback from "../../assets/profile-background.png";
import formback from "../../assets/formback.jpg"

export const Container = styled.div`
  background: url(${profileback}) 100% no-repeat;
  background-size: cover;
  height: 100vh;


`;

export const FlexForm = styled.div`
display: flex;
justify-content: center;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px;
  width: 100%;
  max-width: 600px;



  form {
    margin: 45px 0;
    width: 100%;
    max-width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 30px;
      text-align: left;
      text-transform: uppercase;
      font-weight: 500;
      margin-bottom: 20px;
      color: #404143;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 20px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#f4ede8")};
      }
    }
  }
`;

export const Pointer = styled.div`
    position: absolute;
    top: 7%;
    left: 7%;
    svg {
        color: #404143;
        width: 34px;
        height: 34px;

        transition: color 0.3s;

        &:hover {
          color: ${shade(0.2, "#38ada9")};
        }
      }


`;

export const FormContent = styled.div`
  background: url(${formback}) 100% no-repeat;
  background-size: cover;
  box-shadow: 2px 1px 15px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  width: 130%;

  position: relative;
   padding: 0rem 0rem 2rem 0rem;


  img {
    margin-bottom: -3rem;
  }

`;




export const AvatarInput = styled.div`
  margin-bottom: 70px;
  position: relative;
  width: 180px;
  align-self: center;

  img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #38ada9;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    transition: background-color 0.2s, transform 0.3s;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, "#312e38")};
      }
    }

    &:hover {
      background: ${shade(0.2, "#38ada9")};
      transform: scale(1.1);
    }
  }
`;
