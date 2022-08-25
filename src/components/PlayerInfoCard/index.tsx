import { IStatsCategory } from "../../service/api";
import { PlayerInfoCardLi } from "./style";

interface IProps {
  categoria: IStatsCategory;
}

const PlayerInfoCard = ({ categoria }: IProps) => {
  return (
    <PlayerInfoCardLi>
      <span>{categoria.displayName}:</span>
      <span>{categoria.displayValue}</span>
    </PlayerInfoCardLi>
  );
};

export default PlayerInfoCard;
