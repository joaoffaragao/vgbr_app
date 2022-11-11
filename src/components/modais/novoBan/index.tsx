import BackgroundModal from "../BackgroundModal";
import Container from "./style";
import { AiOutlineClose } from "react-icons/ai";

const NovoBan = () => {
  return (
    <BackgroundModal>
      <Container>
        <header>
          <h1>Novo Ban</h1>
          <AiOutlineClose color="white" size={"2rem"} />
        </header>
      </Container>
    </BackgroundModal>
  );
};

export default NovoBan;
