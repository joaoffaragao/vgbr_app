import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  IRotationMap,
  requisicaoBuscaDadosServer,
  requisicaoBuscaOProximoMapa,
} from "../../service/api";
import { IServer } from "./interface";

export interface IServerContextData {
  server: IServer;
  proximoMapa: IRotationMap;
}

export const ServerContext = createContext<IServerContextData>(
  {} as IServerContextData
);

const ServerProvider = () => {
  const [server, setServer] = useState<IServer>({} as IServer);
  const [proximoMapa, setProximoMapa] = useState<IRotationMap>(
    {} as IRotationMap
  );

  async function buscaDadosServidor() {
    try {
      const data = await requisicaoBuscaDadosServer();
      setServer(data.servers[0]);
    } catch (error) {}
  }

  async function buscarProximoMapa() {
    const mapa = await requisicaoBuscaOProximoMapa();
    setProximoMapa(mapa);
  }

  useEffect(() => {
    buscaDadosServidor();
    buscarProximoMapa();
  }, []);

  return (
    <ServerContext.Provider value={{ server, proximoMapa }}>
      <Outlet />
    </ServerContext.Provider>
  );
};

export default ServerProvider;
