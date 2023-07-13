import { useState } from "react";
import { Header } from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import ContentMainRoutes from "../../../routes/ContentMainRoutes";

export const Layout = ({ children }) => {
  const [toggled, setToggled] = useState(false);
  const handleToggleSidebar = (value) => {
    setToggled(value || !toggled);
  };
  return (
    <div>
      <Header
        setToggled={setToggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Sidebar toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
      <div style={{ margin: "56px" }}>{children}</div>
      <ContentMainRoutes></ContentMainRoutes>
    </div>
  );
};
