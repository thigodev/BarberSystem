import React, { useCallback, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { type FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { FiLogIn, FiMail } from "react-icons/fi";

import { useToast } from "../../hooks/Toast";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import signInBackgroundImg from "../../assets/sign-background.png";
import forgotIlus from "../../assets/forgot.svg"

import getValidationErrors from "../../util/getValidationErrors";

import * as Yup from "yup";

import logoImg from "../../assets/logo.png";

import { Container, Content, AnimationContainer, FormContent, TextIntro } from "./styles";
import api from "../../services/api";

interface ForgotPasswordFormData {
  email: string;
}

export const ForgortPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();

  const { addToast } = useToast();

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

      await api.post("/password/forgot", {
        email: data.email,
      });

      addToast({
        type: "success",
        title: "E-mail de recuperação enviado",
        description:
          "Enviamos um e-mail para confirmar a recuperação de senha, cheque sua caixa de entrada",
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: "error",
        title: "Erro na recuperação de senha",
        description:
          "Ocorreu um erro ao tentar realizar a recuperação de senha",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      <Content>

        <AnimationContainer>
          <FormContent>
            <img src={logoImg} alt="GoBarber" />

            <Form
              placeholder={false}
              onPointerEnterCapture={false}
              onPointerLeaveCapture={false}
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <h1>Recuperar <label>senha</label></h1>

              <Input name="email" icon={FiMail} placeholder="E-mail" />

              <Button loading={loading} type="submit">
                Recuperar
              </Button>
            </Form>

            <Link to="/signin">
              <FiLogIn />
              Voltar ao Login
            </Link>
          </FormContent>
          <TextIntro>
            <img src={forgotIlus} />
            <h1>Esqueceu sua Senha?</h1>
            <p>Não se preocupe, estamos aqui para ajudar!
              Siga os passos abaixo para redefinir sua senha
              e voltar a agendar seus cortes de cabelo com facilidade.
            </p>
          </TextIntro>
        </AnimationContainer>
      </Content>

    </Container>
  );
};
