import  "./modalStyles.css";

export const SectionCard = ({objetos , tittle}) => {
  console.log("x8",tittle)
  return (
    <>
    

    <h5 className="custom-title fs-5">{tittle}</h5>

    <div className="card py-3 px-4 mb-3 rounded-5 mx-2" style={{ height: "220px", background:'#fff', boxShadow: '0 0 5px rgba(94, 98, 120, 0.8)' }}>
        {objetos.map((objeto, key) => (
          <div key={key} className="container">
          <div className="row mt-2">
            <div className="col d-flex align-items-center justify-content-between">
              <p className="mb-0 fs-6 fw-bold">{objeto.nombre}:</p>
              <h5 className="mt-0 fs-6">{objeto.valor}</h5>
            </div>
          </div>
        </div>
        ))}
      </div>
    </>
  );
};

