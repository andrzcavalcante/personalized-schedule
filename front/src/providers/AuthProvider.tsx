import { ReactNode, createContext, useEffect, useState } from "react";
import { TLoginData } from "../schema/loginSchema";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { TRegisterData } from "../schema/registerSchema";
import { TUpdateUser } from "../schema/updateUserSchema";
import { toast } from "react-toastify";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: TLoginData) => Promise<void>;
  submitRegister: (data: TRegisterData) => Promise<void>;
  updateUser: (data: TUpdateUser, userId: number) => Promise<void>;
  deleteUser: (userId: number) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setloading] = useState(true);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("schedulesUp:token");

    if (!token) return;

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }, []);

  const signIn = async (data: TLoginData) => {
    try {
      const response = await api.post("/login", data);
      const { token } = response.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      localStorage.setItem("schedulesUp:token", token);

      const responseDataUser = await api.get("/users");
      toast.success("Login concluído!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      try {
        setUser(responseDataUser.data);
      } catch (error) {
       
        console.log(error);
      }
      setTimeout(() => {
        navigate("dashboard");
      }, 3000);
    } catch (error) {
      toast.error("Verifique os dados adicionados!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(error);
    }
  };

  const submitRegister = async (data: TRegisterData) => {
    try {
      await api.post("/users", data);
      toast.success("Usuário criado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error("Verifique os dados adicionados!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(error);
    }
  };

  const updateUser = async (data, contact) => {
    try {
      await api.patch(`/users/${Number(contact)}`, data);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    window.localStorage.clear();

    navigate("/");
  };

  const deleteUser = async (userId: number) => {
    try {
      logout();
      await api.delete(`/users/${Number(userId)}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const DataUser = async () => {
      const response = await api.get("/users");
      try {
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    DataUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, submitRegister, logout, user, updateUser, deleteUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
