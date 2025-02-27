import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { type FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { FiLogIn, FiMail } from "react-icons/fi";
import { LandingPageGlobalStyle } from "../../styles/global-landing";
import Navbar from "../../components/Navbar";
import pedroLogo from "../../assets/pngpedro.png";

// import { useToast } from "../../hooks/Toast";
import { Input } from "../../components/Input";
import { Button } from "../../components/ButtonRow";
import getValidationErrors from "../../util/getValidationErrors";
import * as Yup from "yup";

import { Container, Content, AnimationContainer, Backgroud, ButtonRow, TextIntro } from "./styles";
// import api from "../../services/api";

interface ForgotPasswordFormData {
  email: string;
}

export const Landing: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);
  // const navigate = useNavigate()

  // const { addToast } = useToast();

  const handleSubmit = useCallback(async (data: ForgotPasswordFormData) => {
    try {
      setLoading(true);

      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // await api.post("/password/forgot", {
      //   email: data.email,
      // });

      // addToast({
      //   type: "success",
      //   title: "E-mail de recuperação enviado",
      //   description:
      //     "Enviamos um e-mail para confirmar a recuperação de senha, cheque sua caixa de entrada",
      // });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      // addToast({
      //   type: "error",
      //   title: "Erro na recuperação de senha",
      //   description:
      //     "Ocorreu um erro ao tentar realizar a recuperação de senha",
      // });
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    
    <Container>
      <Content>
        <AnimationContainer>
          <img src={pedroLogo} alt="Pedro Barbeiro Logo" />
          <TextIntro>
            <h1>BARBEARIA</h1>
            <p>
              Agende com facilidade, escolha entre os
              <br />
              melhores profissionais, gerencie<br/> 
              seus horários e desfrute da <br/>
              conveniência de cuidar do seu visual<br/> com
              praticidade e eficiência.
            </p>
          </TextIntro>

          <ButtonRow>
            <a href="/signin">
              <Button> ENTRAR </Button>
            </a>
            <h1> | </h1>
            <a href="/signup">
              <Button> CADASTRAR-SE</Button>
            </a>
          </ButtonRow>
        </AnimationContainer>
      </Content>

      <Backgroud />
    </Container>
  );
};