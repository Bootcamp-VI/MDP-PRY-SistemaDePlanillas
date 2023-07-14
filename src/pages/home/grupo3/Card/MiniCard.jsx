import { FaBuildingUser, FaUser } from "react-icons/fa6";

function MiniCard() {
  return (
    <div
      className="card-mini w-100"
      style={{ width: "365px", height: "130px" }}
    >
      <div className="text-white card-body bg-danger d-flex justify-content-around align-items-center p-2 border-1 rounded-3">
        <div className="">
          <span>Empleados MDP</span>
          <h1>
            <FaBuildingUser />
            100
          </h1>
        </div>
        <div className="">
          <div className="dropdown">
            <button
              className="btn bg-secondary text-white bg-opacity-50 dropdown-toggle w-100"
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
      </div>
    </div>
  );
}

export default MiniCard;
