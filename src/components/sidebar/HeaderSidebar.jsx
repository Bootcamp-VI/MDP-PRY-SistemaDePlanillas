import logo from "../../assets/images/logo_top_header_shadow.png";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";

function HeaderSidebar({ collapsed, onHandleClick }) {
  return (
    <div
      className="text-center d-flex justify-content-center align-items-center"
      style={{ marginBottom: "24px", marginTop: "16px" }}
    >
      {!collapsed ? (
        <>
          <img src={logo} alt="Logo MDP" className="img-fluid px-1" />
          <span onClick={onHandleClick}>
            <FiChevronsLeft color="#3CB9FF" size={25} />
          </span>
        </>
      ) : (
        <span onClick={onHandleClick}>
          <FiChevronsRight color="#3CB9FF" size={25} />
        </span>
      )}
    </div>
  );
}

export default HeaderSidebar;
