import { FaBuildingUser, FaUser } from "react-icons/fa6";
import background from "../Card/Top.svg";

function Card() {
  const svgBackgroundStyles = {
    backgroundImage: background,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="card" style={{ width: "365px", height: "335px" }}>
      <div className="card-body bg-danger d-flex flex-column justify-content-between">
        <div className="header d-flex justify-content-between align-items-center">
          <span className="text-white">Empleados</span>
          <div className="dropdown">
            <button
              className="btn bg-secondary text-white bg-opacity-10 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Exportar
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  PDF
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  XSL
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  JPG
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="body d-flex justify-content-end">
          <div
            className="card d-flex align-items-center justify-content-center"
            style={{ width: "160px", height: "120px" }}
          >
            <div className="text-info text-center">
              <div>
                <FaBuildingUser size={32} />
              </div>
              <div>
                <span>Empleados MDP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer bg-secondary bg-opacity-25">
        <h1>100</h1>
        <span>Empleados Registrados</span>
      </div>
    </div>
  );
}

export default Card;
