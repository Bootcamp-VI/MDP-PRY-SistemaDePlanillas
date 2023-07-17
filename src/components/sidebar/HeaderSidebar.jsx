import { FiChevronsLeft } from "react-icons/fi";
import logo from "../../assets/images/logo_top_header_shadow.png";

function HeaderSidebar({ handleToggleSidebar }) {
  return (
    <div
      className="text-center d-flex justify-content-center align-items-center"
      style={{ marginBottom: "24px", marginTop: "16px" }}
    >
      <img src={logo} alt="Logo MDP" className="img-fluid px-1" />
      <span onClick={() => handleToggleSidebar()}>
        <FiChevronsLeft color="#3CB9FF" size={25} />
      </span>
    </div>
  );
}

export default HeaderSidebar;
