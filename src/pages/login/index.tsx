import Container from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form/dist/useForm";

import { LoginContext } from "../../provider/loginProvider";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Digite um email valido")
      .required(" Email obrigatorio"),
    password: yup.string().required("Senha obrigatoria"),
  })
  .required();

export interface ISession {
  email: string;
  password: string;
}

const Login = () => {
  const { login, erroRequisicao } = useContext(LoginContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISession>({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: ISession) {
    login(data);
  }

  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="InputBox">
          <label htmlFor="email">Email</label>
          <input
            placeholder={"Digite seu email"}
            type={"text"}
            {...register("email")}
          />
          <p>error={errors.email?.message?.toString()}</p>
        </div>
        <div className="InputBox">
          <label htmlFor="password">Password:</label>
          <input
            placeholder={"Digite sua senha"}
            type={"password"}
            {...register("password")}
          />
          <p>error={errors.password?.message?.toString()}</p>
        </div>
        {erroRequisicao && <span>{erroRequisicao}</span>}
        <button>Entrar</button>
      </form>
    </Container>
  );
};
export default Login;
