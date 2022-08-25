import { createContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { requisicaoBuscaDadosPlayer } from "../../service/api";
import { IUser } from "./interface";

interface IUserContext {
  listUser: string[];
  user: IUser;
  buscarUser: (player: string) => void;
  limparUser: () => void;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = () => {
  const [listUser] = useState<string[]>([
    "JaoWick",
    "GordimHabilidoso",
    "DoninhaSuicida",
    "MateusCodornShox",
    "bandit_zz",
  ]);
  const [user, setUser] = useState<IUser>({} as IUser);

  const navigate = useNavigate();

  async function buscarUser(player: string) {
    try {
      const userData = await requisicaoBuscaDadosPlayer(player);
      setUser(userData);
    } catch (error) {
      console.log(error);
    }
    navigate(`/players/${player}`);
  }

  function limparUser() {
    setUser({} as IUser);
  }

  return (
    <UserContext.Provider
      value={{
        listUser,
        user,
        buscarUser,
        limparUser,
      }}
    >
      <Outlet />
    </UserContext.Provider>
  );
};

export default UserProvider;
