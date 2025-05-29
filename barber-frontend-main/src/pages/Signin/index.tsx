"use client"

import type React from "react"
import { useCallback, useRef } from "react"
import { Link } from "react-router-dom"
import { FiMail, FiLock } from "react-icons/fi"
import type { FormHandles } from "@unform/core"
import { Form } from "@unform/web"
import * as Yup from "yup"

import { useAuth } from "../../hooks/Auth"
import { useToast } from "../../hooks/Toast"
import getValidationErrors from "../../util/getValidationErrors"

import logoImg from "../../assets/pngpedro.png"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import {
  Container,
  LeftSection,
  RightSection,
  FormContainer,
  Title,
  Subtitle,
  FormWrapper,
  ForgotPasswordLink,
  SignupLink,
  LogoContainer,
} from "./styles"

interface SignInFormData {
  email: string
  password: string
}

export const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { signIn } = useAuth()
  const { addToast } = useToast()

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string().required("E-mail obrigatório").email("Digite um e-mail válido"),
          password: Yup.string().required("Senha obrigatória"),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await signIn({
          email: data.email,
          password: data.password,
        })
      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }

        addToast({
          type: "error",
          title: "Erro na autenticação",
          description: "Ocorreu um erro ao tentar login, cheque seus dados",
        })
      }
    },
    [signIn, addToast],
  )

  return (
    <Container>
      <LeftSection>
        <FormContainer>
          <Title>Bem vindo!</Title>
          <Subtitle>Insira seu e-mail e senha para entrar.</Subtitle>

          <FormWrapper>
            <Form
              placeholder={false}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <Input name="email" icon={FiMail} placeholder="Email" />
              <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

              <ForgotPasswordLink to="/forgot-password">Esqueceu a senha?</ForgotPasswordLink>

              <Button type="submit">Entrar</Button>
            </Form>
          </FormWrapper>

          <SignupLink>
            Não tem conta? <Link to="/signup">Criar conta</Link>
          </SignupLink>
        </FormContainer>
      </LeftSection>

      <RightSection>
        <LogoContainer>
          <img src={logoImg || "/placeholder.svg"} alt="Pedro Barbeiro Logo" />
        </LogoContainer>
      </RightSection>
    </Container>
  )
}
