import React from 'react'

import { Container } from './styles'

interface TooltipProps {
  title: string
  children: any
  className?: string
}

export const Tooltip: React.FC<TooltipProps> = ({ children, title, className }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  )
}
