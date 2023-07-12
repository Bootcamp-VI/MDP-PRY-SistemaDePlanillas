import {
  Sidebar as SidebarLayout,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { FaBuildingUser } from "react-icons/fa6";
import { BiSolidUser } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import HeaderSidebar from "./HeaderSidebar";

import "../sidebar/Sidebar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const onHandleClick = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="vh-100" style={{minHeight:"200vh"}}>
      <SidebarLayout
        collapsed={collapsed}
        backgroundColor="#1E1E2D"
        rootStyles={{ color: "#ffffff", height: "100%" }}
        className="custom-sidebar"
      >
        <HeaderSidebar collapsed={collapsed} onHandleClick={onHandleClick} />
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0) {
                return {
                  "&:hover": {
                    backgroundColor: "#3CB9FF",
                  },
                };
              }
              if (level === 1)
                return {
                  color: disabled ? "#f5d9ff" : "#fafafa",
                  backgroundColor: active ? "#3CB9FF" : "#1E1E2D",

                  "&:hover": {
                    backgroundColor: "#3CB9FF",
                  },
                };
            },
          }}
        >
          <SubMenu label="Empleados" icon={<FaBuildingUser size={25} />}>
            <NavLink to='/base/create_employed'><MenuItem> ° Crear Empleado </MenuItem></NavLink>
            <NavLink to="#"><MenuItem> ° Comprobantes </MenuItem></NavLink>
            <NavLink to="#"><MenuItem> ° Quinta </MenuItem></NavLink>
            <NavLink to="#"><MenuItem> ° Empleados Ext. </MenuItem></NavLink>
            <NavLink to="#"><MenuItem> ° Familiares </MenuItem></NavLink>
            <NavLink to="#"><MenuItem> ° Mov. AFP </MenuItem></NavLink>
            <NavLink to="#"><MenuItem> ° Vacaciones </MenuItem></NavLink>
            <NavLink to="#"><MenuItem> ° Descanso Médico </MenuItem></NavLink>
            <NavLink to="#"><MenuItem> ° Establecimiento Interno </MenuItem></NavLink>
            <NavLink to="#"><MenuItem> ° Establecimiento Externo </MenuItem></NavLink>
          </SubMenu>
          <NavLink to="/base/dashboard"><MenuItem icon={<BiSolidUser size={25}/>}>Usuarios</MenuItem></NavLink>
          <NavLink to="#"><MenuItem icon={<GiReceiveMoney size={25}/>}> Pagos </MenuItem></NavLink>
          <NavLink to="#"><MenuItem icon={<IoMdSettings size={25}/>}> Configuración </MenuItem></NavLink>
        </Menu>
      </SidebarLayout>
    </div>
  );
}

export default Sidebar;
