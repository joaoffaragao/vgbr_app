import { Link } from "react-router-dom";
import { Container } from "./style";
import Background from "../../components/background";

const Home = () => {
  return (
    <Background>
      <Container>
        <main>
          <div className="Link__Box">
            <Link className="LinkEntrar" to="/dashboard">
              Entrar
            </Link>
          </div>
        </main>
      </Container>
    </Background>
  );
};

export default Home;
