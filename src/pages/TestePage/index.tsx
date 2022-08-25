import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../provider/UserProvider";
import { Container } from "./style";

const Testepage = () => {
  const { listUser, limparUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    limparUser();
  }, []);

  return (
    <Container>
      <header>
        <h1>VGBR</h1>
      </header>
      <main>
        <ul>
          {listUser.map((player) => {
            return (
              <li key={player}>
                <h2>{player}</h2>
                <button
                  onClick={() => {
                    navigate(`${player}`);
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

export default Testepage;
