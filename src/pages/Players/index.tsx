import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Loading from "../../components/Loading";

import { UserContext } from "../../provider/UserProvider";
import { Container } from "./style";

const Players = () => {
  const { listUser, buscarUser, limparUser } = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    limparUser();
  }, []);

  if (!listUser.length) {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      return <Loading />;
    } else {
      return <Navigate to={origin} />;
    }
  } else {
    return (
      <Container>
        <Header string={"/dashBoard"} />
        <main>
          <ul>
            {listUser.map((player) => {
              return (
                <li
                  key={player}
                  onClick={() => {
                    buscarUser(player);
                    navigate(`/players/${player}`);
                  }}
                >
                  <h2>{player}</h2>
                </li>
              );
            })}
          </ul>
        </main>
      </Container>
    );
  }
};

export default Players;
