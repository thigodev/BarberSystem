import styled from "styled-components";
import wellcome from "../../assets/back717171.png";
import income from "../../assets/back717171.png";
import weather from "../../assets/back717171.png";

export const Container = styled.div`
  min-height: 100vh;
  `;


export const Header = styled.div`
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.3);
  padding: 20px 0;
  background: #000000;
  border-radius: 0rem 0rem  3rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContent = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;



  > img {
    height: 80px;
    margin-right: 1rem;
  }
  h1{
    font-weight: 500;
    font-size: 32px;
    font-family: 'Montserrat';
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #dcdde1;
    cursor: default;

  }
  &:hover{

    transition: 1s;
  }
  span{

    color:rgb(255, 255, 255);
    font-weight: 400;
    font-size: 32px;
  }
  button {
    margin-left: 80px;
    background: transparent;
    border: 0;
    transition: box-shadow 0.3s ease-in-out;

    svg {
      color: #dcdde1;
      width: 25px;
      height: 25px;
      transition: .2s;


    &:hover {
      transition: .2s;
      color: #626262;
    }
  }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  text-transform: capitalize;

  img {
    width: 65px;
    height: 65px;
    border-radius: 60%;
    box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.1);
    transition: .2s;
    &:hover {
      width: 68px;
      height: 68px;
      cursor: pointer;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
      }
  }

  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #404143;
      font-size: 18px;
    }

    a {
      text-decoration: none;
      color: #dcdde1;
      font-size: 20px;
      transition: .1s;

      &:hover {
        transition: .2s;
        color: white;
      }
    }
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: 44px auto;
  display: flex;
`;
export const FlexForm = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;


export const FormContent = styled.div`
  background-color: #484848;
  box-shadow: 2px 1px 12px 4px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: baseline;
  border-radius: 2rem;
  width: 100%;
  padding: 2rem 3rem 2.5rem 3rem;

  position: relative;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.02);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #404143;
    border-radius: 20px;
  }

  `;

export const Wellcome = styled.div`
  background: url(${wellcome}) no-repeat 100%;
  padding: .5rem;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  width: 27rem;
  height: 13rem;
  box-shadow: 1px 1px 15px 0px rgba(0,0,0,0.2);
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;


  h1{
    width: 70%;
    text-transform: capitalize;
    color:rgb(255, 255, 255);
    font-weight: 600;
    span{
      color:rgb(255, 255, 255);
      font-weight: 500;
    }
  }

  h2{
    color:rgb(255, 255, 255);
    font-size: 30px;
    font-weight: 600;
  }
  div{
    display: flex ;
    align-items: center;
    text-transform: capitalize;
    gap: .5rem;

    h4{
      font-size: 20px;
      color:rgb(255, 255, 255);
      font-weight: 600;

    }
  }
`;

export const Income = styled.div`
  background: url(${income}) no-repeat 100%;
  padding: .5rem;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  width: 27rem;
  height: 13rem;
  box-shadow: 1px 1px 15px 0px rgba(0,0,0,0.2);
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1{
    width: 65%;
    font-size: 28px;
    text-transform: capitalize;
    color:rgb(255, 255, 255);
    font-weight: 600;
    span{
      font-size: 28px;
      padding-bottom: 1rem;
      color:rgb(255, 255, 255);
      font-weight: 600;
    }
  }
`;
export const Weather = styled.div`
  background: url(${weather}) no-repeat 100%;
  padding: .5rem;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  width: 27rem;
  height: 13rem;
  box-shadow: 1px 1px 15px 0px rgba(0,0,0,0.2);
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-around;

  img{
      width: 25px;
      height: 25px;
    }

  h1{
    width: 65%;
    font-size: 28px;
    text-transform: capitalize;
    color:rgb(255, 255, 255);
    font-weight: 600;
    span{
      font-size: 28px;
      padding-bottom: 1rem;
      color:rgb(255, 255, 255);
      font-weight: 600;
    }

  }

  h2{
    font-weight: 600;
    font-size: 28px;
    color:rgb(255, 255, 255);

  }
  span{
      font-size: 28px;
      padding-bottom: 1rem;
      color:rgb(255, 255, 255);
      font-weight: 600;
    }
`;

export const Schedule = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding-right: 20px;
  padding-left:  20px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 465px;
  box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.35);
  position: relative;
  border-radius: 1rem .1rem 1rem 1rem;




  h1 {
    font-size: 36px;
    color:rgb(255, 255, 255);
  }


  p {
    margin-top: 8px;
    color:rgb(255, 255, 255);
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: "";
      width: 1px;
      height: 12px;
      background:rgb(255, 255, 255);
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: #438b87;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;


    &::before {
      position: absolute;
      height: 85%;
      width: 3px;
      left: 0;
      content: "";
      background: #079992;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #fff;

      svg {
        color: #38ada9;
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color:rgb(255, 255, 255);
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: #404143;
    width: 70px;

    svg {
      color: #38ada9;
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    background: #438b87;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
      font-size: 20px;
    }
  }
`;

export const Calendar = styled.div`
  box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.3);
  width: 380px;
  padding-top: .3rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 32px;
    color:rgb(255, 255, 255);
  }


  p {
    margin-top: 8px;
    color:rgb(255, 255, 255);
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: "";
      width: 1px;
      height: 12px;
      background:rgb(255, 255, 255);
      margin: 0 8px;
    }
  }

  .DayPicker {
    background: #717171;
    border-radius: 10px;
    padding: 20px;
    width: 87%;
    text-transform: capitalize;
    transition: box-shadow 0.3s ease-in-out;
  }

  .available:not(.outside) {
    background: #242424;
    border-radius: 10px;
    color: #fff;
    margin: 2px;
    width: 37px;
    height: 37px;
  }

  .disabled {
    color: #000 !important;
    background: transparent !important;
  }

  .selected {
    background: #242424 !important;
    border-radius: 10px;
    color:rgb(85, 85, 85) !important;
  }

`;
