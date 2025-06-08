import { shade } from "polished";
import styled from "styled-components";
import profileback from "../../assets/profile-background.png";
import formback from "../../assets/formback.jpg"

export const Container = styled.div`
  background-color: black;
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
    width: 100%;
    max-width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-family: 'poppins', sans-serif;
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 500;
      margin-bottom: 30px;
      color:rgb(255, 255, 255);
      
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

    p{
    margin-top: 30px;
    font-family: 'poppins', sans-serif;
    font-size: 0.70rem;
    color: #AAAAAA;
    text-align: left;

      max-width: 500px;
      opacity: 50%;
}
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
`;

export const Pointer = styled.div`
    position: absolute;
    top: 7%;
    left: 7%;
    svg {
        color:rgb(255, 255, 255);
        width: 27px;
        height: 34px;

        transition: color 0.3s;

        &:hover {
          transform: scale(1.1);
        }
      }


`;

export const FormContent = styled.div`
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  width: 130%;

  position: relative;
   padding: 0rem 0rem 2rem 0rem;


  img {
    margin-bottom: -1rem;
  }

`;

export const AvatarInput = styled.div`
  margin-bottom: 70px;
  position: relative;
  width: 180px;
  align-self: center;

  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background:rgb(114, 114, 114);
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
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
      color:rgb(179, 179, 179);
      transition: color 0.3s;

      &:hover {
        color: black  ;
      }
    }

    &:hover {
      background: white;
      transform: scale(1.1);
    }
  }
`;
