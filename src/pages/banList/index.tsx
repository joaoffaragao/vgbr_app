import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { BanContext } from "../../provider/banProvider";
import { IBan } from "../../service/server/requestNewban";
import Container from "./style";

const BanList = () => {
  const { banList } = useContext(BanContext);

  function diasRestantes(player: IBan): number {
    const dateNow = new Date();
    const futureDate = new Date("2028/10/12");
    if (player.created) {
      console.log(futureDate.getDate());
    }
    return 2;
  }

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

                {diasRestantes(player) > 1 ? (
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
