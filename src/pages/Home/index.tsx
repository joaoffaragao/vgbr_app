import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { Container } from "./style";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <nav>
        <button onClick={() => navigate("/servidor")}>Server</button>
        <button onClick={() => navigate("/players")}>players</button>
      </nav>
    </Container>
  );
};

export default Home;
