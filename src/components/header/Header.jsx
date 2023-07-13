import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { FaSearch, FaRegBell, FaCog, FaExchangeAlt, FaDoorOpen } from 'react-icons/fa';
import '../header/Header.css';

import logo from "../../assets/images/logo_top_header_shadow.png";

export const Header = ({ handleToggleSidebar, toggled }) => {
  return (
    <nav style={{zIndex:"999"}} className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="d-flex align-items-start">
          <div className="d-flex align-items-center" style={{ margin: "8px" }}>
            <img src={logo} alt="Logo MDP" className="img-fluid px-2 d-none d-lg-block" width={120} height={70} />
            {
              toggled ? (
                <span onClick={() => handleToggleSidebar()}>
                  <FiChevronsLeft color="#3CB9FF" size={25} />
                </span>)
                :
                (<span onClick={() => handleToggleSidebar()}>
                  <FiChevronsRight color="#3CB9FF" size={25} />
                </span>)
            }

          </div>
        </div>
        <div className="ms-auto d-flex align-items-center">

          <a href="#" className="header-icon">
            <FaSearch />
          </a>
          <a href="#" className="header-icon">
            <FaRegBell />
          </a>
          <a href="#" className="header-icon">
            <FaCog />
          </a>
          <a href="#" className="header-icon">
            <FaExchangeAlt />
          </a>
          <span className="profile-header me-4 mx-2">John Doe</span>
          <div className="dropdown">
            <a
              href="#"
              className="dropdown-toggle remove-dropdown-arrow"
              id="userDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="User Avatar"
                className="rounded-circle header-avatar"
                width="40"
                height="40"
              />
            </a>
            <ul className="header-option dropdown-menu dropdown-menu-end mt-3" aria-labelledby="userDropdown">
              <li>
                <a className="dropdown-item" href="/auth">
                  <div className="d-flex align-items-center">
                    <FaDoorOpen className="me-2" />
                    Salir
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

