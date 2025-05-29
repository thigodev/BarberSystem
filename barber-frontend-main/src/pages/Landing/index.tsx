import type React from "react"
import { Link } from "react-router-dom"
import logoImg from "../../assets/pngpedro.png";

import {
  Container,
  Content,
  LogoContainer,
  Title,
  Subtitle,
  ButtonContainer,
  EntrarButton,
  Description,
} from "./styles"

export const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={logoImg || "/placeholder.svg"} alt="Pedro Barbeiro Logo" />
        </LogoContainer>

        <Title>BARBEARIA</Title>

        <Subtitle>Cabelo & Barba</Subtitle>

        <ButtonContainer>
          <Link to="/signin">
            <EntrarButton>ENTRAR</EntrarButton>
          </Link>
        </ButtonContainer>

        <Description>
          Agende com facilidade, escolha entre os melhores profissionais,
          <br />
          gerencie seus horários e desfrute da conveniência de cuidar do
          <br />
          seu visual com praticidade e eficiência.
        </Description>
      </Content>
    </Container>
  )
}
