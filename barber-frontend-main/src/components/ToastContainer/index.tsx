import React from 'react'
import { useTransition } from '@react-spring/web'

import { Toast } from './Toast'

import { type ToastMessage } from '../../hooks/Toast'
import { Container } from './styles'

interface ToastContainerProps {
  messages: ToastMessage[]
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const transitions = useTransition(messages, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 1 }
  })

  return (
    <Container>
      {messages.map(message => (
        transitions((style, item) => (
          <Toast
          style={style}
          key={message.id}
          message={item}
           />
        ))
      ))}
    </Container>
  )
}
