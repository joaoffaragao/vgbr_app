import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import PlayerInfoCard from "../../components/PlayerInfoCard";
import { UserContext } from "../../provider/UserProvider";
import { PlayerCardCotainer } from "./style";

export interface ICategoria {
  name: string;
  value: string | number;
}

const Player = () => {
  const { user, buscarUser } = useContext(UserContext);
  const { tagName } = useParams();

  const [categoryList, setCategoryList] = useState<ICategoria[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
          keys !== "bestClass" &&
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
      if (tagName) {
        buscarUser(tagName);
      }
    }
  }, [user]);

  if (!user.id) {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      return <Loading />;
    } else {
      return <Navigate to="/players" />;
    }
  } else {
    return (
      <PlayerCardCotainer>
        <Header string="/players" />
        <main>
          <section className="player__data">
            <div>
              <h2>{user.userName}</h2>
              <img src={user.rankImg} alt="" />
            </div>
            <div className="img_box">
              <img src={user.avatar} alt={user.userName} />
            </div>
          </section>
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
