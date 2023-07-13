function FiltersHome() {
  return (
    <div className="row my-3">
      <div className="col-lg-4 col-md-12 mb-lg-0">
        <div className="px-4 py-1">
          <h6 className="mb-0 pt-1 fc-primary-important">Últimos Registros de empleados</h6>
        </div>
      </div>
      <div className="col-lg-3 col-md-12 mb-lg-0">
        <div className="px-3 py-1">
          <div className="input-group input-group-md custom-search">
            <input
              type="text"
              className="form-control custom-search"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-md"
              placeholder="Buscar Empleado"
            />
            <button className="btn btn-outline-secondary custom-search btn-md" type="button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 m-left-4 mb-md-0">
        <div className="px-0 py-1">
          <div className="btn-group">
            <button
              className="btn btn-md btn-fill-primary btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa-solid fa-filter mx-2"></i>Filtrar por
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Código
              </a>
              <a className="dropdown-item" href="#">
                Empleado
              </a>
              <a className="dropdown-item" href="#">
                Documento
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 m-left-4 d-flex ">
        <div className="px-0 py-1">
          <button className="btn btn-md btn-fill-primary btn-primary d-flex align-items-center">
            <i className="fa-solid fa-file-export mx-2"></i> Exportar
          </button>
        </div>
      </div>
    </div>
  );
}

export default FiltersHome;
