import { Routes, Route, Navigate } from "react-router-dom";

import BaseTemplate from "../components/layout/baseTemplate";
import {Login} from "../pages/auth/login/Login";

function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/base/*" exact element={<BaseTemplate/>} />
      <Route path="/auth" element={<Login/>} />
      <Route path="*" element={<Navigate to={"/auth"}/>}/>
    </Routes>
  );
}

export default GlobalRoutes;
