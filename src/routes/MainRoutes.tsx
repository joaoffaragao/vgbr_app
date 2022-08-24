import { Routes, Route, Navigate } from "react-router-dom";
import Testepage from "../pages/TestePage";
import UserProvider from "../provider/UserProvider";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<UserProvider />}>
        <Route path="*" element={<Navigate to="/testePage" />} />
        <Route path="testePage" element={<Testepage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
