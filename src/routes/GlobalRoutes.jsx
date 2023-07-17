import { Routes, Route, Navigate } from "react-router-dom";

import { Login } from "../pages/auth/login/Login";
import Home from "../pages/Home";

function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/base/*" exact element={<Home />} />
      <Route path="/auth" element={<Login />} />
      <Route path="*" element={<Navigate to={"/auth"} />} />
    </Routes>
  );
}

export default GlobalRoutes;
