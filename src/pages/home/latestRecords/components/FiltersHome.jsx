import React from "react";

function FiltersHome() {
  return (
    <div className="container d-flex flex-column flex-sm-row justify-content-end">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Buscar" />
            <button className="btn btn-outline-secondary" type="button">
              Buscar
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <div className="btn-group mb-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Filtrar por
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Campo 1
              </a>
              <a className="dropdown-item" href="#">
                Campo 2
              </a>
              <a className="dropdown-item" href="#">
                Campo 3
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <div className="btn-group mb-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Columnas a mostrar
            </button>
            <div className="dropdown-menu">
              <label className="dropdown-item">
                <input type="checkbox" className="form-check-input" />
                Columna 1
              </label>
              <label className="dropdown-item">
                <input type="checkbox" className="form-check-input" />
                Columna 2
              </label>
              <label className="dropdown-item">
                <input type="checkbox" className="form-check-input" />
                Columna 3
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <button className="btn btn-primary">Exportar a Excel</button>
        </div>
      </div>
    </div>
  );
}

export default FiltersHome;
