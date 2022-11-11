import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { ServerContext } from "../../provider/serverProvider";
import { UserContext } from "../../provider/UserProvider";

import { Container } from "./style";
import servidorOfflogo from "../../assets/imgs/confused-color-icon.svg";

const DashBoard = () => {
  const navigate = useNavigate();

  const { servers, serverForadoAr } = useContext(ServerContext);
  const { listUser } = useContext(UserContext);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {}, [listUser]);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    return <Loading paginaAnterior={origin} />;
  } else {
    return (
      <Container>
        <Header string={origin} />
        <nav>
          {servers.length ? (
            servers.map((server) => {
              return (
                <button
                  key={server.gameId}
                  onClick={() => navigate(`/servidor/${server.gameId}`)}
                >
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
              );
            })
          ) : (
            <button onClick={() => serverForadoAr()}>
              <div className="box_server">
                <div className="imgBox">
                  <img src={servidorOfflogo} alt="" />
                </div>
                <div className="Info">
                  <span className="serverOutText">
                    Servidor está fora do Ar
                  </span>
                </div>
              </div>
            </button>
          )}

          <button onClick={() => navigate("/players")}>
            <div className="BttMembros">
              <h2>Membros</h2>
            </div>
          </button>
          <button onClick={() => navigate("/rank")}>Rank</button>
          <button onClick={() => navigate("/login")}>Staff</button>
        </nav>
      </Container>
    );
  }
};

export default DashBoard;
