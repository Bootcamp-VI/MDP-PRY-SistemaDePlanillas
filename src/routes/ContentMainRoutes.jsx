import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import CreateEmployee from "../pages/createEmployee/CreateEmployee";

function ContentMainRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/create_employed" element={<CreateEmployee/>} />
    </Routes>
  );
}

export default ContentMainRoutes;
