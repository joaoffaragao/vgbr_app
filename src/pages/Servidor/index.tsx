import { useContext } from "react";
import Header from "../../components/Header";
import { ServerContext } from "../../provider/serverProvider";
import { ServeContainer } from "./style";

const Servidor = () => {
  const { server, proximoMapa } = useContext(ServerContext);

  return (
    <ServeContainer>
      <Header link={origin} />
      <main>
        <h1>{server.prefix}</h1>
        <div className="mapa">
          <h2>{server.currentMap}</h2>
          <img src={server.url} alt="" />
        </div>

        <div className="infos">
          {server.description && <h2>{server.description}</h2>}
          <div className="info__card">
            <span>Players:</span>
            <span>{server.serverInfo}</span>
          </div>
          <div className="info__card">
            <span>Modo:</span>
            <span>{server.mode}</span>
          </div>
          <div className="info__card">
            <span>Fila:</span>
            <span>{server.inQue}</span>
          </div>
        </div>

        <div className="proximo__map">
          <h2>Proximo Mapa</h2>
          <div className="mapa">
            <h2>{proximoMapa.mapname}</h2>
            <img src={proximoMapa.image} alt="" />
            <div className="info__card">
              <span>Mode:</span>
              <span>{proximoMapa.mode}</span>
            </div>
          </div>
        </div>
      </main>
    </ServeContainer>
  );
};

export default Servidor;
