import Header from "../../components/Header";
import Container from "./style";
import img from "../../assets/imgs/under-construction.png";

const Rank = () => {
  return (
    <Container>
      <Header string="/dashBoard" />
      <div>
        <img src={img} alt="" />
      </div>
    </Container>
  );
};

export default Rank;
