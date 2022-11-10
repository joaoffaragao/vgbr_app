import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Servidor from "../pages/Servidor";
import UserProvider from "../provider/UserProvider";
import Player from "../pages/Player";
import Players from "../pages/Players";
import ServerProvider from "../provider/serverProvider";
import ServidorOff from "../pages/ServidorOff";
import DashBoard from "../pages/dashBoard";
import Intro from "../pages/Intro/intro";
import Rank from "../pages/Rank";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/teste" element={<Intro />} />

      <Route element={<UserProvider />}>
        <Route element={<ServerProvider />}>
          <Route path="/dashBoard" element={<DashBoard />} />
          <Route path="home" element={<Home />} />
          <Route path="servidor" element={<Servidor />} />
          <Route path="/servidorOFF" element={<ServidorOff />} />
          <Route path="/rank" element={<Rank />} />
        </Route>

        <Route path="players" element={<Players />} />
        <Route path="players/:tagName" element={<Player />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
