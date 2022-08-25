import { ICategoria } from "../../pages/Player";
import { PlayerInfoCardLi } from "./style";

interface IProps {
  categoria: ICategoria;
}

const PlayerInfoCard = ({ categoria }: IProps) => {
  return (
    <PlayerInfoCardLi>
      <span>{categoria.name}:</span>
      <span>{categoria.value}</span>
    </PlayerInfoCardLi>
  );
};

export default PlayerInfoCard;
