import  "./modalStyles.css";

export const SectionCard = ({objetos , tittle, icon }) => {
  console.log("x8",tittle)
  return (
    <>

       
      <h5 className="custom-title d-flex align-items-center">
        {icon}
        <span className="ms-2">{tittle}</span>
      </h5>

    <div className="card py-3 p-4 px-md-4 mb-3 rounded-5 mx-2" style={{ maxHeight: "290px", overflow: "auto" }}>
      {objetos.map((objeto, key) => (
        <div key={key}>
          <p className="mb-0 text-truncate">{objeto.nombre}</p>
          <h5 className="mt-0 fs-6 m-2">{objeto.valor}</h5>
        </div>
      ))}
    </div>
    </>
  );
};

