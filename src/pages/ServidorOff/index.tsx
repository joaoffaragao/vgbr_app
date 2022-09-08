import { ContainerServidorOff } from "./style";
import Header from "../../components/Header";
import iconeChorando from "../../assets/imgs/confused-color-icon.svg";

const ServidorOff = () => {
  return (
    <ContainerServidorOff>
      <Header string={"/dashBoard"} />
      <main>
        <h1>Servidor está off</h1>
        <img src={iconeChorando} alt="" />
      </main>
    </ContainerServidorOff>
  );
};

export default ServidorOff;
