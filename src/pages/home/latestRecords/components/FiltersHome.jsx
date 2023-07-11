function FiltersHome() {
  return (
    <div className=" d-flex flex-column flex-sm-row justify-content-end">
      <div className="row ">
        <div className=" ">
          <div className="input-group mb-3 ms-6 ">
            <input type="text" className="form-control" placeholder="Buscar" />
            <button className="btn btn-outline-secondary" type="button">
              Buscar
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="">
          <div className="btn-group mb-3 ms-3">
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
        <div className="">
          <div className="btn-group mb-3 ms-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Columnas
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
        <div className=" ms-3">
          <button className="btn btn-primary">Exportar a Excel</button>
        </div>
      </div>
    </div>
  );
}

export default FiltersHome;
