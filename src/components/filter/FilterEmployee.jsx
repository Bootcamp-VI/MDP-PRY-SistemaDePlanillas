import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import PropTypes from "prop-types";

const FilterEmployee = ( props ) => {
  const title = props.title;
  const EmployeeName = props.EmployeeName;
  const [selectedDocument, setSelectedDocument] = useState("");
  const [selectedRxh, setSelectedRxh] = useState("");
  const [employeeName, setEmployeeName] = useState("");

  const handleDocumentChange = (event) => {
    setSelectedDocument(event.target.value);
  };

  const handleRxhChange = (event) => {
    setSelectedRxh(event.target.value);
  };

  const handleSearchPlaceholder = () => {
    if (selectedDocument === "DNI") {
      return "Buscar por DNI";
    } else if (selectedDocument === "Pasporte") {
      return "Buscar por Pasaporte";
    } else if(selectedDocument === "CE"){
      return "Buscar por Carné de Extranjería";
    } else {
      return "Buscar por...";
    }
  };


  return (
    <div className="container border rounded my-2 d-flex flex-column">
      <h3 className="my-2">{title}</h3>

      {/* First Row */}
      <div className="row my-2 justify-content-between">
        <div className="col-lg-4 col-md-8 col-sm-6 col-12">
          <div className="input-group">
            <input
              type="text"
              className="form-control form-control-sm p-2 my-2"
              placeholder={handleSearchPlaceholder()}
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
            />
            <button className="btn btn-outline-secondary p-2 my-2" type="button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
          <select
            className="form-select my-2 py-2"
            value={selectedDocument}
            onChange={handleDocumentChange}
          >
            <option value="">Seleccione</option>
            <option value="DNI">DNI</option>
            <option value="Pasporte">Pasporte</option>
            <option value="CE">CE</option>
          </select>
        </div>
        <div className="col-lg-4"></div>
      </div>

      {/* Second Row */}
      <div className="row justify-content-start">
        <div className="col-md-4 d-flex align-items-center">
          <label htmlFor="rxhDropdown" className="me-2 my-2"><b>RxH:</b></label>
          <select
            id="rxhDropdown"
            className="form-select"
            value={selectedRxh}
            onChange={handleRxhChange}
          >
            <option value="">Seleccione</option>
            <option value="Planilla">Planilla</option>
            <option value="Practicante">Practicante</option>
            <option value="Externo">Externo</option>
          </select>
        </div>

        <div className="col-md-4 d-flex align-items-center my-2 col-sm-6">
          <label htmlFor="employeeInput" className="me-2"><b>Empleado:</b></label>
          <label htmlFor="employeeInput" className="me-2 text-muted">{EmployeeName}</label>
        </div>
        <div className="col-md-4 text-center col-sm-6 text-sm-end">
          <button className="btn btn-primary my-2">
            <MdAddCircleOutline className="me-2" />
            Agregar
          </button>
        </div>

      </div>
    </div>
  );
};

FilterEmployee.propTypes = {
  title: PropTypes.string.isRequired,
  EmployeeName: PropTypes.string.isRequired,
}

export default FilterEmployee;