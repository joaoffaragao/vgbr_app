import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { ServerContext } from "../../provider/serverProvider";
import { UserContext } from "../../provider/UserProvider";
import { IUser } from "../../provider/UserProvider/interface";
import { requisicaoBuscaDadosPlayer } from "../../service/api";
import { Container } from "./style";

const DashBoard = () => {
  const navigate = useNavigate();

  const { server } = useContext(ServerContext);
  const { listUser } = useContext(UserContext);

  const [user, setUser] = useState<IUser>({} as IUser);

  async function sortPlayer() {
    const numeroAleatorio = Math.random() * listUser.length;

    try {
      const userData = await requisicaoBuscaDadosPlayer(
        listUser[Math.floor(numeroAleatorio)]
      );
      setUser(userData);
    } catch (error) {
      sortPlayer();
    }
  }

  useEffect(() => {
    sortPlayer();
  }, [listUser]);

  return (
    <Container>
      <Header string={origin} />
      <nav>
        <button onClick={() => navigate("/servidor")}>
          <div className="box_server">
            <div className="imgBox">
              <img src={server.url} alt="" />
            </div>
            <div className="Info">
              <h2 className="MapName">{server.currentMap}</h2>
              <div className="Players">
                <span>Players:</span>
                <span>{server.serverInfo}</span>
              </div>
              <div className="Fila">
                <span>Fila:</span>
                <span>{server.inQue}</span>
              </div>
            </div>
          </div>
        </button>
        <button onClick={() => navigate("/players")}>
          <div className="Logo__Membros">
            <h2>Membros</h2>
          </div>
          <div className="MembrosBox">
            <div className="imgBox">
              <img src={user.avatar} alt="" />
            </div>
            <div className="Info">
              <div className="box__name">
                <h2 className="MapName">{user.userName}</h2>
              </div>
              <div className="Players">
                <span>kills total:</span>
                <span>{user.kills}</span>
              </div>
              <div className="Fila">
                <span>Kills na faca:</span>
                <span>{user.dogtagsTaken}</span>
              </div>
            </div>
          </div>
        </button>
        <button onClick={() => navigate("/rank")}>Rank</button>
      </nav>
    </Container>
  );
};

export default DashBoard;
