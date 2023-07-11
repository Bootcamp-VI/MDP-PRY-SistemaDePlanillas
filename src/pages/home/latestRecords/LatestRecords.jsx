import "bootstrap/dist/css/bootstrap.min.css";
import { EmployeList } from "../../../components/data/EmployedList";
import "./LatestRecords.css";
import FiltersHome from "./components/filtersHome";
function LatestRecords() {
  return (
    <>
      <div className="container-fluid px-0 border rounded">
        <FiltersHome/>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Empleado</th>
                <th>Documento</th>
                <th>Sueldo</th>
                <th>Planilla</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {EmployeList.map((registro, index) => (
                <tr key={index}>
                  <td className="font-weight-bold">{registro.codigo}</td>
                  <td>{registro.empleado}</td>
                  <td>{registro.documento}</td>
                  <td>{registro.sueldo}</td>
                  <td>
                    <input type="checkbox" defaultChecked={registro.planilla} />
                  </td>
                  <td>
                    <span
                      className={`badge ${registro.estado === "Activo" ? "bg-success bg-inline-success" : "bg-warning bg-inline-warning"}`}
                    >
                      {registro.estado}
                    </span>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button className="btn btn-sm btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Acciones
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Ver
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Editar
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Eliminar
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default LatestRecords;
