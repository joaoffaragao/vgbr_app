import { useContext } from "react";
import Header from "../../components/Header";
import { BanContext } from "../../provider/banProvider";
import Container from "./style";

const BanList = () => {
  const { banList } = useContext(BanContext);

  return (
    <Container>
      <Header string="/staff" />
      <main>
        <ul>
          {banList.map((player) => {
            return (
              <li key={player.id + player.motivo}>
                <h2>{player.id}</h2>
                <p>{player.motivo}</p>

                {player.punicao > 1 ? (
                  <p>{`${player.punicao} dias restantes`}</p>
                ) : (
                  <p>{`${player.punicao} dia restante`}</p>
                )}
              </li>
            );
          })}
        </ul>
      </main>
    </Container>
  );
};

export default BanList;
