import { useContext, useState } from "react";
import Header from "../../components/Header";
import { ServerContext } from "../../provider/serverProvider";
import { ServeContainer } from "./style";
import Loading from "../../components/Loading";
import { Navigate } from "react-router-dom";

const Servidor = () => {
  const { server, team1, team2 } = useContext(ServerContext);
  const [loading, setLoading] = useState<boolean>(true);

  if (!server.gameId) {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      return <Loading />;
    } else {
      return <Navigate to="/servidorOFF" />;
    }
  } else {
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

          <section className="players__box">
            <div className="team1">
              <h3>{team1.name}</h3>
              <img src={team1.image} alt="" />
              <ul>
                {team1.players &&
                  team1.players.map((player) => {
                    return (
                      <li key={player.user_id}>
                        <span>{player.name}</span>
                        <span>{player.platoon}</span>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="team2">
              <h3>{team2.name}</h3>
              <img src={team2.image} alt="" />
              <ul>
                {team2.players &&
                  team2.players.map((player) => {
                    return (
                      <li key={player.user_id}>
                        <span>{player.name}</span>
                        <span>{player.platoon}</span>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </section>
        </main>
      </ServeContainer>
    );
  }
};

export default Servidor;
