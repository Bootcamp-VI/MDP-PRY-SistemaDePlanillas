import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import CreateEmployee from "../pages/createEmployee/CreateEmployee";
// import Concepts from "../pages/concepts/Concepts";

function ContentMainRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/create_employed" element={<CreateEmployee/>} />
      {/* <Route path="/concepts" element={<Concepts/>}/> */}
    </Routes>
  );
}

export default ContentMainRoutes;
