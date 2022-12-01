import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { BanContext } from "../../provider/banProvider";
import { IBan } from "../../service/server/requestNewban";
import Container from "./style";

const BanList = () => {
  const { banList,getListBan,perdoarBan } = useContext(BanContext);

  function  diasRestantes(ban: IBan): number {

    const d1  = new Date();
    const d2    = new Date(ban.created!);
    const diffInMs   = new Date(d1).getTime() - new Date(d2).getTime() 
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    const diasRestantes = ban.punicao - diffInDays

    return  Math.round(diasRestantes);
  }

  useEffect(()=>{
    const TokenArmazeado = localStorage.getItem("vgbr:token");
    if(TokenArmazeado){
      getListBan(TokenArmazeado)
    }
  },[])

  return (
    <Container>
      <Header string="/staff" />
      <main>
        <ul>
          {banList.filter((ban) =>{
            return (diasRestantes(ban)) > 0
          }).map((ban) => {
            return (
              <li key={ban.id + ban.motivo}>
                <div>
                  <h2>Nick: {ban.playerName}</h2>
                  <p>Motivo: {ban.motivo}</p>

                  {diasRestantes(ban) !== 1 ? (
                    <p>dias restantes: {`${diasRestantes(ban)}`}</p>
                  ) : (
                    <p>dia restante: {`${diasRestantes(ban)}`}</p>
                  )}
                </div>
                <button onClick={()=>{
                 perdoarBan(ban)
                }}>Perdoar</button>
              </li>
            );
          })}
        </ul>
      </main>
    </Container>
  );
};

export default BanList;
