import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { IUser, requisicaoBuscaDadosPlayer } from "../../service/api";

interface IUserContext {
  listUser: string[];
  user: IUser;
  buscarUser: (plataforma: string, player: string) => void;
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

  useEffect(() => {
    console.log("clicou");
    buscarUser("origin", "MateusCodornShox");
  }, []);

  async function buscarUser(plataforma: string, player: string) {
    const userData = await requisicaoBuscaDadosPlayer(plataforma, player);
    setUser(userData);
  }

  function limparUser() {
    setUser({} as IUser);
  }

  return (
    <UserContext.Provider value={{ listUser, user, buscarUser, limparUser }}>
      <Outlet />
    </UserContext.Provider>
  );
};

export default UserProvider;
