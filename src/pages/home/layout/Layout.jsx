import { useState } from "react";
import { Header } from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";


export const Layout = ({ children }) => {
  const [toggled, setToggled] = useState(false);
  const handleToggleSidebar = (value) => {
    setToggled(value || !toggled);
  };
  return (
    <div>
      <Header
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Sidebar toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
      <>{children}</>
      
    </div>
  );
};
