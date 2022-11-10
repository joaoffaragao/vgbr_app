import { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  requisicaoBuscaDadosPlayer,
  requisicaoBuscaDadosPlayerID,
  requisicaoListaDeMembros,
} from "../../service/api";
import { IUser } from "./interface";

interface IUserContext {
  listUser: string[];
  user: IUser;
  buscarUser: (player: string) => void;
  limparUser: () => void;
  buscarUserID: (player: string) => void;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = () => {
  const [listUser, setListUser] = useState<string[]>([]);
  const [user, setUser] = useState<IUser>({} as IUser);

  const navigate = useNavigate();

  async function buscarUser(player: string) {
    const userData = await requisicaoBuscaDadosPlayer(player);
    setUser(userData);
  }

  async function buscarUserID(id: string) {
    try {
      const userData = await requisicaoBuscaDadosPlayerID(id);
      if (user.id !== userData.id) {
        setUser(userData);
      }
    } catch (error) {
      console.log(error);
    }
    navigate(`/players/${id}`);
  }

  function limparUser() {
    setUser({} as IUser);
  }

  useEffect(() => {}, []);

  function alteraNome(nome: string) {
    switch (nome) {
      case "joaoffa":
        return "JaoWick";
      case "banditfv":
        return "bandit_zz";
      case "DENIO2020":
        return "-D3NIO";
      default:
        return nome;
    }
  }

  async function listaDeMembros() {
    const members = await requisicaoListaDeMembros();
    const newArray = members.map((membro) => {
      let nome = alteraNome(membro.name);
      return nome;
    });
    newArray.push("dmorandini");
    setListUser(newArray);
  }

  useEffect(() => {
    listaDeMembros();
  }, []);

  return (
    <UserContext.Provider
      value={{
        listUser,
        user,
        buscarUser,
        limparUser,
        buscarUserID,
      }}
    >
      <Outlet />
    </UserContext.Provider>
  );
};

export default UserProvider;
