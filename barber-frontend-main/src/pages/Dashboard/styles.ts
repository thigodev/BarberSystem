import styled from "styled-components"
import wellcome from "../../assets/back717171.png"
import income from "../../assets/back717171.png"
import weather from "../../assets/back717171.png"

export const Container = styled.div`
  min-height: 100vh;
  background:rgba(25, 24, 27, 1);
  `

export const Header = styled.div`
  padding: 10px 0;
  background:rgb(0, 0, 0);

  display: flex;
  justify-content: space-between;
  align-items: center;
`

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
    font-family: 'poppins';
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #dcdde1;
    cursor: default;

  }
  &:hover{

    transition: 1s;
  }

    p{
    font-family: 'poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
}
  span{
    font-family: 'poppins', sans-serif;
    background: white;
    font-weight: 400;
    font-size: 14px;
    color: black;
    padding: 6px 30px;
    border-radius: 8px;

      
   &:hover{
    transition: .6s;
    background:rgb(54, 54, 54);
    color:rgb(255, 255, 255);
  }
  }
  button {
    margin-left: 20px;
    background: transparent;
    border: 0;
    transition: box-shadow 0.3s ease-in-out;

    svg {
    display: none;
  }
  }
`

export const FinanceButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #22c55e !important;
  border-radius: 8px;
  padding: 6px 20px;
  margin-left: 50px !important;
  transition: all 0.3s ease;
  text-decoration: none;

  p{
    font-family: 'poppins', sans-serif;
    color: #fff !important;
    font-weight: 600;
    font-size: 14px !important;
  }

  &:hover {
    background:rgb(49, 56, 52) !important;
    border-color: #16a34a;  

    transition: .6s;
    background:rgb(54, 54, 54);
    color:rgb(255, 255, 255);
  }

  &:active {
    transform: translateY(0);
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;


  img {
    width: 65px;
    height: 65px;
    border-radius: 60%;
    transition: .2s;

    &:hover {
      width: 68px;
      height: 68px;
      cursor: pointer;
      }
  }

  div {
    display: flex;
    flex-wrap: wrap;
    margin-left: 16px;
    line-height: 24px;

    a {
      text-decoration: none;
      color:rgb(134, 134, 134);
      font-size: 20px;
      transition: .1s;
      margin-left: 5px;

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
`
export const FlexForm = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  flex-wrap: wrap;
`

export const FormContent = styled.div`
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

  `

export const Wellcome = styled.div`
  background: rgba(15, 15, 15, 1);
  padding: .5rem;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  width: 20rem;
  height: 13rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  

  


  h1{
    width: 100%;
    color:rgb(255, 255, 255);
    font-weight: 600;
    font-size: 30px;
    font-family: 'poppins', sans-serif;

    span{
      color:rgb(255, 255, 255);
      font-weight: 500;
      font-family: 'poppins', sans-serif;
    }
  }

  h2{
    color:rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 600;
    font-family: 'poppins', sans-serif;
  }
  div{
    display: flex ;
    align-items: center;
    text-transform: capitalize;
    gap: .5rem;
    font-family: 'poppins', sans-serif;

    h4{
      font-size: 20px;
      color:rgb(255, 255, 255);
      font-weight: 600;
      font-family: 'poppins', sans-serif;

    }
  }
`

export const Income = styled.div`
  background: rgba(15, 15, 15, 1);
  padding: .5rem;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  width: 20rem;
  height: 13rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1{
    width: 65%;
    font-size: 20px;
    color:rgb(255, 255, 255);
    font-weight: 600;
    font-family: 'poppins', sans-serif; 

    span{
      font-size: 30px;
      padding-bottom: 1rem;
      color:rgb(255, 255, 255);
      font-weight: 600;
      font-family: 'poppins', sans-serif;
    }
  }

  p{
    width: 65%;
    font-size: 30px;
    color:rgb(255, 255, 255);
    font-weight: 600;
    font-family: 'poppins', sans-serif;
    margin-bottom: 40px;
  }


`
export const Weather = styled.div`
  background: rgba(15, 15, 15, 1);
  padding: .5rem;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  width: 20rem;
  height: 13rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  img{
      display: none;
    }

  h1{
    width: 100%;
    font-size: 20px;
    text-transform: capitalize;
    color:rgb(255, 255, 255);
    font-weight: 600;
    font-family: 'poppins', sans-serif;

    span{
      font-size: 20px;
      padding-bottom: 1rem;
      color:rgb(255, 255, 255);
      font-weight: 600;
      font-family: 'poppins', sans-serif;
    }

  }

  h2{
    font-weight: 600;
    font-size: 40px;
    color:rgb(255, 255, 255);
    font-family: 'poppins', sans-serif;

  }
  span{
      font-size: 40px;
      padding-bottom: 1rem;
      color:rgb(255, 255, 255);
      font-weight: 600;
      font-family: 'poppins', sans-serif;
      margin-left: 45px;
    }
`

export const Schedule = styled.div`
  background: rgba(15, 15, 15, 1);
  flex: 1;
  overflow-y: scroll;
  padding-right: 20px;
  padding-left:  20px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 465px;
  position: relative;
  border-radius: 4px;

  h1 {
    font-size: 36px;
    color:rgb(255, 255, 255);
    font-family: 'poppins', sans-serif;
  }


  p {
    margin-top: 8px;
    color:rgb(255, 255, 255);
    display: flex;
    align-items: center;
    font-weight: 500;
    font-family: 'poppins', sans-serif;

    span {
      display: flex;
      align-items: center;
      font-family: 'poppins', sans-serif;
    }

    span + span::before {
      content: "";
      width: 1px;
      height: 12px;
      background:rgb(255, 255, 255);
      margin: 0 8px;
    }
  }
`

export const NextAppointment = styled.div`
  margin-top: 64px;
  strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background:rgb(56, 150, 91);
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 4px;
    margin-top: 24px;
    position: relative;


    &::before {
      position: absolute;
      height: 85%;
      width: 3px;
      left: 0;
      content: "";
      background:rgb(56, 150, 91);
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
        color:rgb(255, 255, 255);
        margin-right: 8px;
      }
    }
  }
`

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
`

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
      color: #404143;
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    background:rgb(75, 75, 75);
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 4px;
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
`

export const Calendar = styled.div`
  background: rgba(15, 15, 15, 1);
  width: 380px;
  padding-top: 2rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -223px;

  h1 {
    font-size: 32px;
    color:rgb(255, 255, 255);
    font-family: 'poppins', sans-serif;
  }


  p {
    margin-top: 8px;
    color:rgb(255, 255, 255);
    display: flex;
    align-items: center;
    font-weight: 500;
    font-family: 'poppins', sans-serif;
    

    span {
      display: flex;
      align-items: center;
      font-family: 'poppins', sans-serif;
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
    background:rgba(25, 24, 27, 1);
    border-radius: 4px;
    padding: 20px;
    width: 87%;
    height: 80%;
    text-transform: capitalize;
  }

  .available:not(.outside) {
    background: rgba(15, 15, 15, 1);
    border-radius: 4px;
    color: #fff;
    margin: 2px;
    width: 37px;
    height: 37px;
  }

  .disabled {
    color: rgb(212, 212, 212) !important;
    background: transparent !important;
  }

  .selected {
    background: #22c55e !important;
    border-radius: 10px;
    color:rgb(71, 71, 71) !important;
  }

`
