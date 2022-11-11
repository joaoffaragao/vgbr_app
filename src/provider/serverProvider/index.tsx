import { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Iteam,
  requisicaoBuscaDadosServer,
  requisicaoBuscaPalyersNoServidor,
} from "../../service/api";
import { ToastContext } from "../toastyProvider";
import { IServer } from "./interface";

export interface IServerContextData {
  servers: IServer[];
  buscarPlayersNoServer: (id?: string) => Promise<Iteam[]>;
  serverForadoAr: () => void;
  defineServer: (id?: string) => IServer;
}

export const ServerContext = createContext<IServerContextData>(
  {} as IServerContextData
);

const ServerProvider = () => {
  const [servers, setServers] = useState<IServer[]>([]);

  const { toastErro } = useContext(ToastContext);

  async function buscaDadosServidor() {
    const data = await requisicaoBuscaDadosServer();
    if (data.servers[0]) {
      setServers(data.servers);
    }
  }

  async function buscarPlayersNoServer(id?: string) {
    const data = await requisicaoBuscaPalyersNoServidor(id);
    return data;
  }

  function serverForadoAr() {
    toastErro("Servidor fora do ar");
  }

  function defineServer(id?: string): IServer {
    const server = servers.find((server) => {
      return server.gameId === id;
    });
    if (server?.gameId) {
      return server;
    }

    return {} as IServer;
  }

  useEffect(() => {
    if (!servers.length) {
      buscaDadosServidor();
    }
  }, [servers]);

  return (
    <ServerContext.Provider
      value={{ servers, buscarPlayersNoServer, serverForadoAr, defineServer }}
    >
      <Outlet />
    </ServerContext.Provider>
  );
};

export default ServerProvider;
