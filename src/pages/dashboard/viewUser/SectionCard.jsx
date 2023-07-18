import  "./modalStyles.css";

export const SectionCard = ({objetos , tittle}) => {
  console.log("x8",tittle)
  return (
    <>
    

    <h5 className="custom-title">{tittle}</h5>

    <div className="card py-3 px-2 px-md-4 mb-3 rounded-5 mx-2" style={{ maxHeight: "290px", overflow: "auto" }}>
      {objetos.map((objeto, key) => (
        <div key={key}>
          <p className="mb-0 fs-6 text-truncate">{objeto.nombre}</p>
          <h5 className="mt-0 fs-6 m-2">{objeto.valor}</h5>
        </div>
      ))}
    </div>
    </>
  );
};

