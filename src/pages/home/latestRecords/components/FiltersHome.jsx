function FiltersHome() {
  return (
    <div className="d-flex flex-col-reverse flex-column flex-sm-row justify-content-end  bg-white">
      <div className="row mx-3 my-md-3 my-1 custom-search">
        <div className="col">
          <div className="input-group input-group-md">
            <input
              type="text"
              className="form-control custom-search"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-md"
            />
            <button className="btn btn-outline-secondary custom-search btn-md" type="button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="row mx-1 my-md-3 my-1">
        <div className="col">
          <div className="btn-group m-0 p-0">
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
      <div className="row mx-1 my-md-3 my-1">
        <div className="col">
          <button className="btn btn-md btn-fill-primary btn-primary d-flex align-items-center">
            <i className="fa-solid fa-file-export mx-2"></i> Exportar
          </button>
        </div>
      </div>
    </div>
  );
}

export default FiltersHome;
