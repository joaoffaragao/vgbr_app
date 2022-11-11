import { createContext, useState, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ISession } from "../../pages/login";
import { requestLogin } from "../../service/requestLogin";
import { AdmContext } from "../admProvider";
import { ToastContext } from "../toastyProvider";

interface IcontextProps {
  login: (data: ISession) => void;
  erroRequisicao: string;
}

export const LoginContext = createContext<IcontextProps>({} as IcontextProps);

const LoginProvider = () => {
  const { toastSucesso } = useContext(ToastContext);
  const { addToken } = useContext(AdmContext);
  const [erroRequisicao, setErroRequisicao] = useState("");
  const navigate = useNavigate();

  async function login(data: ISession) {
    try {
      const token = await requestLogin(data);
      localStorage.setItem("vgbr:token", token);
      addToken(token);
      toastSucesso("Login Feito com Sucesso");
      navigate("/staff");
    } catch (error) {
      setErroRequisicao("Email e senha sao invalidos");
    }
  }

  return (
    <LoginContext.Provider value={{ login, erroRequisicao }}>
      <Outlet />
    </LoginContext.Provider>
  );
};

export default LoginProvider;
