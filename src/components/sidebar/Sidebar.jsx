import { BiSolidUser } from "react-icons/bi";
import { FaBuildingUser,FaHouse } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";

import {
  Menu,
  MenuItem,
  Sidebar as SidebarLayout,
  SubMenu,
} from "react-pro-sidebar";

import { Link } from "react-router-dom";
import "../sidebar/Sidebar.css";

function Sidebar({ toggled, handleToggleSidebar }) {
  return (
    <div>
      <SidebarLayout
        backgroundColor="#1E1E2D"
        rootStyles={{ color: "#ffffff", height: "100%" }}
        className="custom-sidebar"
        onBackdropClick={() => handleToggleSidebar(false)}
        toggled={toggled}
        breakPoint="all"
      >
        <div style={{ marginTop: "58px" }}></div>
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
          <MenuItem
            component={<Link to="/base/dashboard" />}
            icon={<FaHouse size={25} />}
          >
            Inicio
          </MenuItem>
          <SubMenu label="Empleados" icon={<FaBuildingUser size={25} />}>
            <MenuItem component={<Link to="/base/create_employed" />}>
              {" "}
              ° Crear Empleado{" "}
            </MenuItem>
            <MenuItem component={<Link to="/documentation" />}>
              {" "}
              ° Comprobantes{" "}
            </MenuItem>
            <MenuItem component={<Link to="/documentation" />}>
              {" "}
              ° Quinta{" "}
            </MenuItem>
            <MenuItem component={<Link to="/documentation" />}>
              {" "}
              ° Empleados Ext.{" "}
            </MenuItem>
            <MenuItem component={<Link to="/documentation" />}>
              {" "}
              ° Familiares{" "}
            </MenuItem>
            <MenuItem component={<Link to="/documentation" />}>
              {" "}
              ° Mov. AFP{" "}
            </MenuItem>
            <MenuItem component={<Link to="/documentation" />}>
              {" "}
              ° Vacaciones{" "}
            </MenuItem>
            <MenuItem component={<Link to="/documentation" />}>
              {" "}
              ° Descanso Médico{" "}
            </MenuItem>
            <MenuItem component={<Link to="/documentation" />}>
              {" "}
              ° Establecimiento Interno{" "}
            </MenuItem>
            <MenuItem component={<Link to="/documentation" />}>
              {" "}
              ° Establecimiento Externo{" "}
            </MenuItem>
          </SubMenu>
          <MenuItem
            component={<Link to="/base/dashboard" />}
            icon={<BiSolidUser size={25} />}
          >
            Usuarios
          </MenuItem>
          <MenuItem icon={<GiReceiveMoney size={25} />}> Pagos </MenuItem>
          <MenuItem icon={<IoMdSettings size={25} />}> Configuración </MenuItem>
        </Menu>
      </SidebarLayout>
    </div>
  );
}

export default Sidebar;
