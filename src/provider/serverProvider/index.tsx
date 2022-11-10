import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Iteam,
  requisicaoBuscaDadosServer,
  requisicaoBuscaPalyersNoServidor,
} from "../../service/api";
import { IServer } from "./interface";

export interface IServerContextData {
  server: IServer;
  team1: Iteam;
  team2: Iteam;
  serverStatus: boolean;
}

export const ServerContext = createContext<IServerContextData>(
  {} as IServerContextData
);

const ServerProvider = () => {
  const [server, setServer] = useState<IServer>({} as IServer);
  const [serverStatus, setServerStatus] = useState<boolean>(false);
  const [team1, setTeam1] = useState<Iteam>({} as Iteam);
  const [team2, setTeam2] = useState<Iteam>({} as Iteam);

  async function buscaDadosServidor() {
    const data = await requisicaoBuscaDadosServer();
    if (data.servers[0]) {
      setServerStatus(false);
    } else {
      setServer(data.servers[0]);
    }
  }

  async function buscarPlayersNoServer() {
    const data = await requisicaoBuscaPalyersNoServidor();
    setTeam1(data[0]);
    setTeam2(data[1]);
  }

  useEffect(() => {
    if (!serverStatus) {
      buscaDadosServidor();
      if (serverStatus) {
        buscarPlayersNoServer();
      }
    }
  }, []);

  return (
    <ServerContext.Provider value={{ server, team1, team2, serverStatus }}>
      <Outlet />
    </ServerContext.Provider>
  );
};

export default ServerProvider;
