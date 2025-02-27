import React, { useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";
import { type FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import signup from "../../assets/signup.svg";

import api from "../../services/api";

import { useToast } from "../../hooks/Toast";

import getValidationErrors from "../../util/getValidationErrors";

import Logo from "../../assets/pngpedro.png";

import {
  Container,
  Content,
  AnimationContainer,
  TextIntro,
  FormContent,
} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

export const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório"),
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string().min(6, "No mínimo 6 dígitos"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post("/users", data);

        navigate("/");

        addToast({
          type: "success",
          title: "Cadastro realizado!",
          description: "Você já pode fazer seu logon no Gobarber",
        });
      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: "error",
          title: "Erro na cadastro",
          description: "Ocorreu um erro ao fazer cadastro, tente novamente",
        });
      }
    },
    [addToast, navigate]
  );

  return (
    <Container>
      {/* <Backgroud /> */}
      <Content>
        <AnimationContainer>
          <TextIntro>
            <img src={signup} />
            <h1>Crie sua conta!</h1>
            <p>
            Junte-se a nós e descubra como é fácil cuidar do seu visual.
            Cadastre-se em poucos passos e comece a agendar seus cortes
            de cabelo com os profissionais mais renomados.
            </p>
          </TextIntro>

          <FormContent>
            <img src={Logo} alt="GoBarber" />

            <Form
              placeholder={false}
              onPointerEnterCapture={false}
              onPointerLeaveCapture={false}
              ref={formRef}
              onSubmit={handleSubmit}
              initialData={{}}
            >
              <h1>
                Crie sua <label>conta</label>
              </h1>

              <Input name="name" icon={FiUser} placeholder="Nome" />
              <Input name="email" icon={FiMail} placeholder="E-mail" />
              <Input
                type="password"
                name="password"
                icon={FiLock}
                placeholder="Senha"
              />
              <Checkbox name="barber" />
              <Button type="submit">Cadastrar</Button>
            </Form>

            <Link to="/">
              <FiArrowLeft />
              Voltar para o início
            </Link>
          </FormContent>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
