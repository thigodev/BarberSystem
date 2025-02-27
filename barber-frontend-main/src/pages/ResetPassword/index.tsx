import React, { useCallback, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { type FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import api from "../../services/api";

import { FiLock, FiLogIn } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import getValidationErrors from "../../util/getValidationErrors";

import * as Yup from "yup";

import { useToast } from "../../hooks/Toast";

import logoImg from "../../assets/logo.png";
import { Container, Content, AnimationContainer, FormContent } from "./styles";

interface ResetpasswordFormData {
  password: string;
  password_confirmation: string;
}

export const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ResetpasswordFormData) => {
      try {
        const schema = Yup.object().shape({
          password: Yup.string().required("Senha obrigatória"),
          password_confirmation: Yup.string().required("Confirme sua senha"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const token = location.search.replace("?token=", "");

        if (!token) {
          throw new Error();
        }

        await api.post("/password/reset", {
          password: data.password,
          password_confirmation: data.password_confirmation,
          token,
        });

        navigate("/");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: "error",
          title: "Erro ao resetar senha",
          description: "Ocorreu um erro ao resetar sua senha, tente novamente",
        });
      }
    },
    [navigate, addToast, location.search]
  );

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
            <h1>Resetar senha</h1>

            <Input
              name="password"
              type="password"
              icon={FiLock}
              placeholder="Nova senha"
            />
            <Input
              name="password_confirmation"
              type="password"
              icon={FiLock}
              placeholder="Confirmação da senha"
            />

            <Button type="submit">Alterar senha</Button>
          </Form>

            <Link to="/">
              <FiLogIn />
              Voltar ao login
            </Link>
          </FormContent>
        </AnimationContainer>
      </Content>

    </Container>
  );
};
