import { Routes, Route, Navigate } from "react-router-dom";
import PlayerCard from "../components/ListaInfoPlayer";
import Testepage from "../pages/TestePage";
import UserProvider from "../provider/UserProvider";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<UserProvider />}>
        <Route path="player" element={<Testepage />} />
        <Route path="player/:id" element={<PlayerCard />} />
        <Route path="*" element={<Testepage />} />
        <Route path="*" element={<Navigate to="/player" />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
