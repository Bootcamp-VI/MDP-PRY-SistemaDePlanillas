import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { FaSearch, FaRegBell, FaCog, FaExchangeAlt } from "react-icons/fa";
import "../header/Header.css";

import logo from "../../assets/images/logo_top_header_shadow.png";

export const Header = ({ handleToggleSidebar, toggled }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark py-3"
      style={{ backgroundColor: "#1E1E2D" }}
    >
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo MDP" className="img-fluid px-1" />
          {toggled ? (
            <span onClick={() => handleToggleSidebar()}>
              <FiChevronsLeft color="#3CB9FF" size={25} />
            </span>
          ) : (
            <span onClick={() => handleToggleSidebar()}>
              <FiChevronsRight color="#3CB9FF" size={25} />
            </span>
          )}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <FaSearch />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaRegBell />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaCog />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaExchangeAlt />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                John Doe
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Salir
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
