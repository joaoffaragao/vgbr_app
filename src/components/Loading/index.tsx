import Header from "../Header";
import { LoadingContainer } from "./style";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loading = () => {
  return (
    <LoadingContainer>
      <Header string={origin} />
      <main>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </main>
    </LoadingContainer>
  );
};

export default Loading;
