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
  const { user, limparUser, buscarUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState<ICategoria[]>([]);
  const { id } = useParams();

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

      // const stats = user;
      // const array = [
      //   stats.accuracy,
      //   stats.activePlatoon,
      //   stats.avatar,
      //   stats.avengerKills,
      //   stats.awardScore,
      //   stats.bestClass,
      //   stats.bonusScore,
      //   stats.classes,
      //   stats.currentRankProgress,
      //   stats.deaths,
      //   stats.dogtagsTaken,
      //   stats.headShots,
      //   stats.headshots,
      //   stats.heals,
      //   stats.highestKillStreak,
      //   stats.id,
      //   stats.infantryKillDeath,
      //   stats.infantryKillsPerMinute,
      //   stats.killAssists,
      //   stats.killDeath,
      //   stats.kills,
      //   stats.killsPerMinute,
      //   stats.longestHeadShot,
      //   stats.loses,
      //   stats.rank,
      //   stats.rankImg,
      //   stats.repairs,
      //   stats.revives,
      //   stats.roundsPlayed,
      //   stats.saviorKills,
      //   stats.scorePerMinute,
      //   stats.secondsPlayed,
      //   stats.squadScore,
      //   stats.timePlayed,
      //   stats.totalRankProgress,
      //   stats.userName,
      //   stats.winPercent,
      //   stats.wins,
      // ];
      setCategoryList(newArray);
    } else {
      if (id) {
        buscarUser(id);
      }
    }
  }, [user]);

  console.log(categoryList);

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
              {categoryList.map((categoria, index) => {
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
