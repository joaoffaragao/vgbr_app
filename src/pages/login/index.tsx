import Container from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";

import { LoginContext } from "../../provider/loginProvider";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";

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
      <Header string="/dashboard" />
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <div className="InputBox">
            <label htmlFor="email">Email</label>
            <input
              placeholder={"Digite seu email"}
              type={"text"}
              {...register("email")}
            />
            {errors.email?.message && (
              <p>{errors.email?.message?.toString()}</p>
            )}
          </div>
          <div className="InputBox">
            <label htmlFor="password">Password</label>
            <input
              placeholder={"Digite sua senha"}
              type={"password"}
              {...register("password")}
            />
            {errors.password?.message && (
              <p>{errors.password?.message?.toString()}</p>
            )}
          </div>
          {erroRequisicao && <span>{erroRequisicao}</span>}
          <button>Entrar</button>
        </form>
      </main>
    </Container>
  );
};
export default Login;
