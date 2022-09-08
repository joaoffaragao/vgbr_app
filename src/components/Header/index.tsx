import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./style";

interface IProps {
  string?: string;
}

const Header = ({ string }: IProps) => {
  return (
    <HeaderContainer string={string}>
      <main>
        {string ? (
          <Link className="LogoHeader" to={origin}>
            <h1>VGBR</h1>
          </Link>
        ) : (
          <h1 className="LogoHeader">VGBR</h1>
        )}
        {string && (
          <Link className="VoltarBtn" to={string}>
            voltar
          </Link>
        )}
      </main>
    </HeaderContainer>
  );
};

export default Header;
