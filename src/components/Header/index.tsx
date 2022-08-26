import { Link, useNavigate } from "react-router-dom";
import { HeaderContainer } from "./style";

interface IProps {
  link?: string;
}

const Header = ({ link }: IProps) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer link={link}>
      <Link to={origin}>
        <h1>VGBR</h1>
      </Link>
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
