import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  ReactNode,
} from "react";
import api from "../services/api";

interface User {
  id: string;
  name: string;
  email: string;
  barber: boolean;
  avatar_url: string;
  token: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
  barber?: boolean;
}

interface AuthContextState {
  barber?: boolean;
  token: string;
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signUp: (credentials: SignUpCredentials) => Promise<void>; // Adicionado
  signOut: () => void;
  updateUser: (user: User) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextState | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@barber:token");
    const user = localStorage.getItem("@barber:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("sessions", { email, password });
    const { token, user } = response.data;
    localStorage.setItem("@barber:token", token);
    localStorage.setItem("@barber:user", JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  // Adicione esta função para cadastro
  const signUp = useCallback(async ({ name, email, password, barber = false }: SignUpCredentials) => {
    await api.post("users", { name, email, password, barber });
    // O login pode ser feito automaticamente aqui, se desejar
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@barber:token");
    localStorage.removeItem("@barber:user");

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback((user: User) => {
    localStorage.setItem("@barber:user", JSON.stringify(user));

    setData((prevState) => ({
      token: prevState.token,
      user,
    }));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token: data.token,
        user: data.user,
        barber: data.user?.barber,
        signIn,
        signUp, // Adicionado aqui
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextState => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};