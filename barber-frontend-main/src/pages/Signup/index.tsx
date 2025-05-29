"use client"

import type React from "react"
import { useCallback, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiMail, FiUser, FiLock } from "react-icons/fi"
import type { FormHandles } from "@unform/core"
import { Form } from "@unform/web"
import * as Yup from "yup"

import { useAuth } from "../../hooks/Auth"
import { useToast } from "../../hooks/Toast"
import getValidationErrors from "../../util/getValidationErrors"

import logoImg from "../../assets/pngpedro.png"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Checkbox } from "../../components/Checkbox"

import {
  Container,
  LeftSection,
  RightSection,
  FormContainer,
  Title,
  Subtitle,
  FormWrapper,
  SigninLink,
  LogoContainer,
} from "./styles"

interface SignUpFormData {
  name: string
  email: string
  password: string
  barber?: boolean
}

export const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { signUp } = useAuth()
  const { addToast } = useToast()
  const navigate = useNavigate()

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório"),
          email: Yup.string().required("E-mail obrigatório").email("Digite um e-mail válido"),
          password: Yup.string().min(6, "No mínimo 6 dígitos"),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await signUp({
          name: data.name,
          email: data.email,
          password: data.password,
          barber: data.barber || false,
        })

        navigate("/signin")

        addToast({
          type: "success",
          title: "Cadastro realizado!",
          description: "Você já pode fazer seu login na Barbearia Pedro",
        })
      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }

        addToast({
          type: "error",
          title: "Erro no cadastro",
          description: "Ocorreu um erro ao fazer cadastro, tente novamente",
        })
      }
    },
    [signUp, addToast, navigate],
  )

  return (
    <Container>
      <LeftSection>
        <LogoContainer>
          <img src={logoImg || "/placeholder.svg"} alt="Pedro Barbeiro Logo" />
        </LogoContainer>
      </LeftSection>

      <RightSection>
        <FormContainer>
          <Title>Criar conta</Title>
          <Subtitle>Faça parte e organize seu negócio!</Subtitle>

          <FormWrapper>
            <Form
              placeholder={false}
              onPointerEnterCapture={false}
              onPointerLeaveCapture={false}
              ref={formRef}
              onSubmit={handleSubmit}
              initialData={{}}
            >
              <Input name="name" icon={FiUser} placeholder="Nome" />
              <Input name="email" icon={FiMail} placeholder="Email" />
              <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

              <Checkbox name="barber" label="Sou barbeiro" />

              <Button type="submit">Cadastrar</Button>
            </Form>
          </FormWrapper>

          <SigninLink>
            Já tem conta? <Link to="/signin">Entrar</Link>
          </SigninLink>
        </FormContainer>
      </RightSection>
    </Container>
  )
}
