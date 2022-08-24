import { Routes, Route } from "react-router-dom";
import Testepage from "../pages/TestePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Testepage />} />
    </Routes>
  );
};

export default MainRoutes;
