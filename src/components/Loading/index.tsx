import Header from "../Header";
import { LoadingContainer } from "./style";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface IProps {
  paginaAnterior: string;
}

const Loading = ({ paginaAnterior }: IProps) => {
  return (
    <LoadingContainer>
      <Header string={paginaAnterior} />
      <main>
        <Box sx={{ display: "flex" }}>
          <img
            src={
              "https://velhaguardabrasil.com.br/wp-content/uploads/2022/07/VELHA-GUARDA-BRASIL-RED-PINK-3.png"
            }
            alt=""
          />
        </Box>
      </main>
    </LoadingContainer>
  );
};

export default Loading;
