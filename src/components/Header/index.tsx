import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "./style";

interface IProps {
  link?: string;
}

const Header = ({ link }: IProps) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer link={link}>
      <h1>VGBR</h1>
      {link && (
        <button
          onClick={() => {
            navigate(link, { replace: true });
          }}
        >
          voltar
        </button>
      )}
    </HeaderContainer>
  );
};

export default Header;
