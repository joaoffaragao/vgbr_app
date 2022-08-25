import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import PlayerInfoCard from "../../components/PlayerInfoCard";
import { UserContext } from "../../provider/UserProvider";
import { PlayerCardCotainer } from "./style";

export interface ICategoria {
  name: string;
  value: string | number;
}

const Player = () => {
  const { user, buscarUser, limparUser } = useContext(UserContext);

  const [categoryList, setCategoryList] = useState<ICategoria[]>([]);
  const { id } = useParams();

  useEffect(() => {
    limparUser();
  }, []);

  useEffect(() => {
    if (user.id) {
      const newArray = [];

      for (const keys in user) {
        if (
          keys !== "activePlatoon" &&
          keys !== "classes" &&
          keys !== "weapons" &&
          keys !== "vehicles" &&
          keys !== "rankImg" &&
          keys !== "avatar" &&
          keys !== "skill" &&
          keys !== "platoons"
        ) {
          const obj = {
            name: keys,
            value: user[keys],
          };

          newArray.push(obj);
        }
      }

      setCategoryList(newArray);
    } else {
      if (id) {
        buscarUser(id);
      }
    }
  }, [user]);

  if (!user.id) {
    return (
      <div>
        <h1>Carregando</h1>
      </div>
    );
  } else {
    return (
      <PlayerCardCotainer>
        <Header link="/players" />
        <main>
          <div>
            <h2>{user.userName}</h2>
            <img src={user.rankImg} alt="" />
          </div>
          <img src={user.avatar} alt={user.userName} />
          <section className="playerInfos">
            <ul>
              {categoryList.map((categoria) => {
                return (
                  <PlayerInfoCard key={categoria.name} categoria={categoria} />
                );
              })}
            </ul>
          </section>
        </main>
      </PlayerCardCotainer>
    );
  }
};
export default Player;
