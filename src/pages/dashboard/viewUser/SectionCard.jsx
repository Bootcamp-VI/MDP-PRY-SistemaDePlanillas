export const SectionCard = ({objetos , tittle}) => {
  console.log("x8",tittle)
  return (
    <>
    

      <h5>{tittle}</h5>

      <div className="card py-2 " style={{height:"300px"}}>
      {objetos.map((objeto, key) => (
        <div key={key} className="container">
          <p className="mb-0">{objeto.nombre}</p>
          <h5 className="mt-0">{objeto.valor}</h5>
        </div>
        ))}
      </div>
    </>
  );
};

