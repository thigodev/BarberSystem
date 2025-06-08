import styled from "styled-components";
import { shade } from "polished";
import formback from "../../assets/formback2.jpg"

interface ProviderContainerProps {
  selected: boolean;
}

interface ProviderNameProps {
  selected: boolean;
}

interface HoursProps {
  available: boolean;
  selected: boolean;
}

interface HourspanProps {
  selected: boolean;
}



export const Container = styled.div`
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex: 1;
`;


// --------------------------------  Cabeçalho --------------------------------------
export const Header = styled.div`
  padding: 10px 0;
  background:rgb(0, 0, 0);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContent = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
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

    color:rgb(90, 90, 90);
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
      width: 20px;
      height: 20px;
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
  flex-wrap: wrap;
  align-items: center;
  margin-left: auto;
  


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
    margin-left: 16px;
    line-height: 24px;

    p { 

      font-family: 'poppins', sans-serif;
      color:rgb(255, 255, 255);
      font-size: 16px;
      margin-right: 6px;
    }

    a {
      text-decoration: none;
      color:rgb(146, 146, 146);
      font-size: 20px;
      transition: .1s;

      &:hover {
        transition: .2s;
        color: white;
      }
    }
  }
`;

// ------------------------------------------  Conteudo -------------------------------------------


export const Content = styled.div`
  width: 70%;
  margin: 30px auto 0px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Pointer = styled.div`
    position: absolute;
    top: 8.3%;
    left: 6%;
    
    svg {
        color:rgb(255, 255, 255);
        width: 20px;
        height: 20px;

        transition: color 0.3s;

        &:hover {
          color: ${shade(0.2, "rgb(104, 104, 104)")};
        }
      }


`;
export const FormContent = styled.div`
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  border-radius: 2rem;
  flex-direction: column;
  position: relative;
  padding: 3.5rem 7rem 3rem 7rem;


`;
export const FlexItens =  styled.div`
  position: relative;
`;

export const Tittle = styled.div`
  display: flex;
  gap: .5rem;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  font-family: 'poppins';
  text-transform: uppercase;
  letter-spacing: 1px;
  color:rgb(255, 255, 255);
  cursor: default;
  margin-bottom: 3rem;
  flex-wrap: wrap;

img{
  width: 10px;

}
`;

export const Calendar = styled.div`
  width: 380px;
  height: 120px;
  border-radius: 15px;
  transition: .2s;
  left: 10rem;
  

  .DayPicker {
    position: relative;
    top: -7rem;
    left: 13rem;
    background:rgb(87, 87, 87);
    border-radius: 10px;
    padding: 20px;
    width: 87%;
    text-transform: capitalize;
    transition: box-shadow 0.3s ease-in-out;

  }

  .available:not(.outside) {
    background:rgb(87, 93, 97);
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
    background:rgb(29, 29, 29) !important;
    border-radius: 10px;
    color:rgb(255, 255, 255)tant;
  }

  &:hover {

  }
`;


export const Schedule = styled.div`
  flex: 1;
  transition: .2s;
  flex-wrap: wrap;

  h1 {
    font-size: 36px;
    color: #404143;
  }

  p {
    margin-top: 8px;
    color: #404143;
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
      background: #438b87;
      margin: 0 8px;
    }
  }
`;



export const BackButton = styled.button`
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

export const HeaderTitle = styled.h1`
  color: #404143;
  font-family: 'MontSerrat';
  font-size: 24px;
  margin-right: auto;
`;

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const ProvidersListContainer = styled.div`
  height: 112px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow-x: auto;
  
`;

export const ProviderContainer = styled.button<ProviderContainerProps>`
  background: ${(props) => (props.selected ? "#0a3d62" : "#438b87")};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 8px 15px;
  margin-right: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const ProviderAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const ProviderName = styled.span<ProviderNameProps>`
  margin-left: 8px;
  font-family: "RobotoSlab-Medium", sans-serif;
  font-size: 16px;
  color: #f4ede8;
`;

export const Title = styled.h2`
  font-family: "RobotoSlab-Medium", sans-serif;
  color: #404143;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const OpenDatePickerButton = styled.button`
  height: 46px;
  margin-bottom: 20px;
  padding: 10px;
  background: #438b87;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const OpenDatePickerButtonText = styled.span`
  font-family: "RobotoSlab-Medium", sans-serif;
  font-size: 16px;
  color: #f4ede8;
`;

export const Section = styled.div`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  color: #404143;
  font-family: "RobotoSlab-Regular", sans-serif;
  margin-bottom: 10px;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-x: auto;
`;

export const Hour = styled.button<HoursProps>`
  padding: 12px;
  background: ${(props) => (props.selected ? "#0a3d62" : "#438b87")};
  margin-right: 8px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  opacity: ${(props) => (props.available ? 1 : 0.4)};
`;

export const HourText = styled.span<HourspanProps>`
  color: #f4ede8;
  font-family: "RobotoSlab-Regular", sans-serif;
  font-size: 16px;
`;

export const CreateAppointmentButton = styled.button`
  height: 50px;
  background: #438b87;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const CreateAppointmentButtonText = styled.span`
  font-family: "RobotoSlab-Medium", sans-serif;
  font-size: 18px;
  color: #f4ede8;
`;