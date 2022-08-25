import { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { requisicaoBuscaDadosServer } from "../../service/api";
import { IServer } from "./interface";

interface IServerContextData {}

const ServerContext = createContext<IServerContextData>(
  {} as IServerContextData
);

const ServerProvider = () => {
  const [server, setServer] = useState<IServer>({} as IServer);

  async function buscaDadosServidor() {
    try {
      const data = await requisicaoBuscaDadosServer();
      console.log(data);
    } catch (error) {}
  }

  useEffect(() => {
    buscaDadosServidor();
  }, []);

  return (
    <ServerContext.Provider value={{}}>
      <Outlet />
    </ServerContext.Provider>
  );
};

export default ServerProvider;
