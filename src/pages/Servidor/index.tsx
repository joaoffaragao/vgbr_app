import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import { ServeContainer } from "./style";
import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";
import { Iteam } from "../../service/api";
import { ServerContext } from "../../provider/serverProvider";
import { IServer } from "../../provider/serverProvider/interface";

const Servidor = () => {
  const { gameId } = useParams();
  // const [loading, setLoading] = useState<boolean>(true);

  const [team1, setTeam1] = useState<Iteam>({} as Iteam);
  const [team2, setTeam2] = useState<Iteam>({} as Iteam);

  const { defineServer, servers, buscarPlayersNoServer } =
    useContext(ServerContext);
  const [server, setServer] = useState<IServer>({} as IServer);

  async function setPlayerOnTeam() {
    const players = await buscarPlayersNoServer(gameId);
    if (players.length > 0) {
      setTeam1(players[0]);
      setTeam2(players[1]);
    }
  }

  useEffect(() => {
    setServer(defineServer(gameId));
    setPlayerOnTeam();
  }, [server, servers]);

  if (!server.gameId) {
    return <Loading paginaAnterior="/dashBoard" />;
  } else {
    return (
      <ServeContainer>
        <Header string={"/dashBoard"} />
        {server.gameId && (
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
        )}
      </ServeContainer>
    );
  }
};

export default Servidor;
