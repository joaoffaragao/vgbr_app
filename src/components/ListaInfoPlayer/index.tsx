import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../provider/UserProvider";
import { IStatsCategory } from "../../service/api";
import PlayerInfoCard from "../PlayerInfoCard";
import { PlayerCardCotainer } from "./style";

const PlayerCard = () => {
  const { user, buscarUser } = useContext(UserContext);
  const [categoryList, setCategoryList] = useState<IStatsCategory[]>([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      buscarUser("origin", id);

      if (user.platformInfo) {
        const stats = user.segments[0].stats;

        setCategoryList([
          stats.scorePerMinute,
          stats.kdRatio,
          stats.kills,
          stats.deaths,
          stats.damage,
          stats.assists,
          stats.killsAggregated,
          stats.assistsAsKills,
          stats.shotsTaken,
          stats.shotsHit,
          stats.shotsAccuracy,
          stats.killStreak,
          stats.dogtagsTaken,
          stats.avengerKills,
          stats.saviorKills,
          stats.headshots,
          stats.suppressionAssists,
          stats.longestHeadshot,
          stats.killsPerMinute,
          stats.damagePerMinute,
          stats.heals,
          stats.revives,
          stats.revivesRecieved,
          stats.resupplies,
          stats.repairs,
          stats.aceSquad,
          stats.squadSpawns,
          stats.squadWipes,
          stats.ordersCompleted,
          stats.wlPercentage,
          stats.wins,
          stats.losses,
          stats.draws,
          stats.rounds,
          stats.roundsPlayed,
          stats.rank,
          stats.rankScore,
          stats.timePlayed,
          stats.scoreRound,
          stats.scoreGeneral,
          stats.scoreCombat,
          stats.scoreDefensive,
          stats.scoreObjective,
          stats.scoreBonus,
          stats.scoreSquad,
          stats.scoreAward,
          stats.scoreAssault,
          stats.scoreMedic,
          stats.scoreSupport,
          stats.scoreRecon,
          stats.scoreAir,
          stats.scoreLand,
          stats.scoreTanks,
          stats.scoreTransports,
          stats.rankProgression,
        ]);
      }
    } else {
    }
  }, [user]);

  if (!user.platformInfo) {
    return (
      <div>
        <h1>Carregando</h1>
      </div>
    );
  }

  return (
    <PlayerCardCotainer>
      <header>
        <h1>VGBR</h1>
        <button
          onClick={() => {
            navigate("../player");
          }}
        >
          voltar
        </button>
      </header>
      <main>
        <h2>{user.platformInfo.platformUserHandle}</h2>
        <img
          src={user.platformInfo.avatarUrl}
          alt={user.platformInfo.platformUserHandle}
        />
        <section className="playerInfos">
          <ul>
            {categoryList.map((categoria) => {
              return (
                <PlayerInfoCard
                  key={categoria.displayName}
                  categoria={categoria}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </PlayerCardCotainer>
  );
};
export default PlayerCard;
