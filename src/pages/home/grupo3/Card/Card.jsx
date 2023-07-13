import { FaBuildingUser, FaUser } from "react-icons/fa6";
import background from "../Card/Top.svg";
import "./Card.css";

function Card({ typeEmployee, totalEmployees, nameCompany }) {

  return (
    <div className="card card-data" style={{ minWidth: "365px", height: "335px" }}>
      <div className="card-body background-card d-flex flex-column justify-content-between">
        <div className="header d-flex justify-content-between align-items-center">
          <span className="text-white">{ typeEmployee }</span>
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
                {
                  typeEmployee == 'empleados' 
                  ? <FaBuildingUser size={32} />
                  : <FaUser size={32} /> 
                }                
              </div>
              <div>                                 
                  <span>{ typeEmployee } { nameCompany }</span>                  
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer bg-secondary bg-opacity-25">
        <h1>{ totalEmployees }</h1>
        <span>{ typeEmployee } Registrados</span>
      </div>
    </div >
  );
}

export default Card;
