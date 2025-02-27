import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


import { ToastContainer } from '../components/ToastContainer';


export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description: string;
}


interface ToastContextState {
  addToast: (message: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}


interface ToastProviderProps {
  children: React.ReactNode;
}


const ToastContext = createContext<ToastContextState | undefined>(undefined);


export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);


  const addToast = useCallback(({ type, title, description }: Omit<ToastMessage, 'id'>) => {
    const id = uuidv4();


    const toast = {
      id,
      type,
      title,
      description,
    };


    setMessages((prevMessages) => [...prevMessages, toast]);
  }, []);


  const removeToast = useCallback((id: string) => {
    setMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
  }, []);


  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};


export const useToast = (): ToastContextState => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
