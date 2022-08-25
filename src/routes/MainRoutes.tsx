import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Servidor from "../pages/Servidor";
import UserProvider from "../provider/UserProvider";
import Player from "../pages/Player";
import Players from "../pages/Players";
import ServerProvider from "../provider/serverProvider";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="home" element={<Home />} />
      <Route element={<ServerProvider />}>
        <Route path="servidor" element={<Servidor />} />
      </Route>

      <Route element={<UserProvider />}>
        <Route path="players" element={<Players />} />
        <Route path="players/:id" element={<Player />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
