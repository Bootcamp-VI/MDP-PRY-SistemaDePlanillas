import { useState } from "react";

import TdSimple from "./tableComponents/TdSimple";
import TdDouble from "./tableComponents/TdDouble";
import TdImageText from "./tableComponents/TdImageText";
import TdState from "./tableComponents/TdState";
import TdDropdownBtn from "./tableComponents/TdDropdownBtn";
import TableHeaderRow from "./tableComponents/TableHeaderRow";
import { EmployeList } from "../../../../components/data/EmployedList";
import { ViewUser } from "../../../dashboard/viewUser/main";

function TableEmployedHome() {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const columnNames = ["Código", "Empleado", "Documento", "Sueldo", "Planilla", "Estado", "Acción"];
  const actions = [
    { label: "Ver", action: "view" },
    { label: "Editar", action: "edit" },
    { label: "Eliminar", action: "delete" },
  ];

  const handleActionSelect = (action) => {
    if (action === "view") {
      setOpenModal(true);
    } else if (action === "edit") {
      // Acción para editar
    } else if (action === "delete") {
      // Acción para eliminar
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = EmployeList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(EmployeList.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="table-responsive mx-3">
        <table className="table">
          <TableHeaderRow columnNames={columnNames} />
          <tbody>
            {currentItems.map((registro, index) => (
              <tr key={index}>
                <TdSimple text={registro.codigo} />
                <TdImageText
                  primaryText={registro.empleado}
                  secondaryText="00/00/00000"
                  urlImage="../../src/assets/images/perfil2.jpg"
                  maxWidthPx="45px"
                />
                <TdDouble primaryText={registro.documento} secondaryText={"DNI"} />
                <TdDouble primaryText={registro.sueldo} secondaryText={"Paid"} />
                <TdSimple text={registro.planilla === false ? "Planilla" : "RxH"} />
                <TdState stateValue={registro.estado} stateTrue="Activo" stateFalse="Inactivo" />
                <TdDropdownBtn buttonName="Acciones" actions={actions} onSelectAction={handleActionSelect} />
              </tr>
            ))}
          </tbody>
        </table>
        {openModal && <ViewUser closeModal={closeModal} />}
      </div>

      <div className="mx-3 row my-3">
        <div className="col-8">
          <span className="text-body-tertiary px-3">
            Mostrando {currentItems.length} registros de {EmployeList.length}
          </span>
        </div>
        <div className="col-md-4 col-sm-7">
          <button onClick={prevPage} disabled={currentPage === 1} type="button" className="btn  btn-border mx-1">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              disabled={currentPage === page}
              type="button"
              className="btn btn-primary btn-dark-important btn-border mx-1"
            >
              {page}
            </button>
          ))}
          <button onClick={nextPage} disabled={currentPage === totalPages} type="button" className="btn  btn-border mx-1">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TableEmployedHome;
