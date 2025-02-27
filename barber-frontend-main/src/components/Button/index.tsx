import React, { type ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type='button' {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
)
