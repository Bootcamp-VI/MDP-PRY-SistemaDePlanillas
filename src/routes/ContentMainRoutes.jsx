import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import CreateEmployee from "../pages/createEmployee/CreateEmployee";
import Concepts from "../pages/concepts/Concepts";
import BankAccounts from "../pages/bankAccounts/BankAccounts";

function ContentMainRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/create_employee" element={<CreateEmployee/>} />
      <Route path="/concepts" element={<Concepts/>}/>
      <Route path="/bank_accounts" element={<BankAccounts/>}/>
    </Routes>
  );
}

export default ContentMainRoutes;
