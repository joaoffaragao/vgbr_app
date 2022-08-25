import { useContext } from "react";
import Header from "../../components/Header";

import { UserContext } from "../../provider/UserProvider";
import { Container } from "./style";

const Players = () => {
  const { listUser, buscarUser } = useContext(UserContext);

  return (
    <Container>
      <Header link={origin} />
      <main>
        <ul>
          {listUser.map((player) => {
            return (
              <li key={player}>
                <h2>{player}</h2>
                <button
                  onClick={() => {
                    buscarUser(player);
                  }}
                >
                  +
                </button>
              </li>
            );
          })}
        </ul>
      </main>
    </Container>
  );
};

export default Players;
