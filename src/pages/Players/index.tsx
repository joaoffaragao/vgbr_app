import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

import { UserContext } from "../../provider/UserProvider";
import { Container } from "./style";

const Players = () => {
  const { listUser, buscarUser, limparUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    limparUser();
  }, []);

  return (
    <Container>
      <Header link={origin} />
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
};

export default Players;
