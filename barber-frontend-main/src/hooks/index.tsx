import React from 'react'

import { AuthProvider } from './Auth'
import { ToastProvider } from './Toast'

interface AppProviderState {
  children: any
}

export const AppProvider: React.FC<AppProviderState> = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      {children}
    </ToastProvider>
  </AuthProvider>
)
