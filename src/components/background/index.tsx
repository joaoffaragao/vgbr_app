import { ReactNode } from "react";
import BackgroundContainer from "./style";
import logo from "../../assets/imgs/WALLPAPER_RED_PINK2.jpeg";
import logo2 from "../../assets/imgs/VELHA_GUARDA_BRASIL_-_IDV_2022.png";

interface IProps {
  children: ReactNode;
}

const Background = ({ children }: IProps) => {
  return (
    <BackgroundContainer>
      {children}
      <img className="Logo" src={logo} alt="" />
      <img className="Logo2" src={logo2} alt="" />
    </BackgroundContainer>
  );
};

export default Background;
