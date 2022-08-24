import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { IUser, requisicaoBuscaDadosPlayer } from "../../service/api";

interface IUserContext {
  listUser: IUser[];
  user: IUser;
  buscarUser: (plataforma: string, player: string) => void;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = () => {
  const [listUser, setListuser] = useState<IUser[]>([]);
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    buscarUser("origin", "JaoWick");
  }, []);

  async function buscarUser(plataforma: string, player: string) {
    const userData = await requisicaoBuscaDadosPlayer(plataforma, player);
    setUser(userData);
  }

  return (
    <UserContext.Provider value={{ listUser, user, buscarUser }}>
      <Outlet />
    </UserContext.Provider>
  );
};

export default UserProvider;
