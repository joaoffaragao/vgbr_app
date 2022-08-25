import Header from "../../components/Header";
import { ServeContainer } from "./style";

const Servidor = () => {
  return (
    <ServeContainer>
      <Header link={origin} />
      <span>Server</span>
    </ServeContainer>
  );
};

export default Servidor;
