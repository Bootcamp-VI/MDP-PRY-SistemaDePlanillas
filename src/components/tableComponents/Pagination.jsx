import PropTypes from "prop-types";

function Pagination({ currentPage, totalPages, nextPage, prevPage, goToPage, itemsPerPage, totalItems }) {
  return (
    <div className="mx-3 row my-3">
      <div className="col-8">
        <span className="text-body-tertiary px-3">
          Mostrando {itemsPerPage} registros de {totalItems}
        </span>
      </div>
      <div className="col-md-4 col-sm-7">
        <button onClick={prevPage} disabled={currentPage === 1} type="button" className="btn btn-border mx-1">
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
        <button onClick={nextPage} disabled={currentPage === totalPages} type="button" className="btn btn-border mx-1">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  goToPage: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
};

export default Pagination;
