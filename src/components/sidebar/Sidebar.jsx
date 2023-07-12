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

import '../sidebar/Sidebar.css';

function Sidebar() {
  return (
    <div className="vh-100">
      <SidebarLayout
        backgroundColor="#1E1E2D"
        rootStyles={{ color: "#ffffff", height: "100%", }}
        className="custom-sidebar"
      >
        <HeaderSidebar />
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
          <SubMenu label="Empleados" icon={<FaBuildingUser />}>
            <MenuItem> ° Crear Empleado </MenuItem>
            <MenuItem> ° Comprobantes </MenuItem>
            <MenuItem> ° Quinta </MenuItem>
            <MenuItem> ° Empleados Ext. </MenuItem>
            <MenuItem> ° Familiares </MenuItem>
            <MenuItem> ° Mov. AFP </MenuItem>
            <MenuItem> ° Vacaciones </MenuItem>
            <MenuItem> ° Descanso Médico </MenuItem>
            <MenuItem> ° Establecimiento Interno </MenuItem>
            <MenuItem> ° Establecimiento Externo </MenuItem>
          </SubMenu>
          <MenuItem icon={<BiSolidUser />}>Usuarios</MenuItem>
          <MenuItem icon={<GiReceiveMoney />}> Pagos </MenuItem>
          <MenuItem icon={<IoMdSettings />}> Configuración </MenuItem>
        </Menu>
      </SidebarLayout>
    </div>
  );
}

export default Sidebar;
