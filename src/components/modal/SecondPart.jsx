const headers2 = [
  "Codigo",
  "Tipo de Concepto",
  "Concepto",
  "Periodo de Validez",
  "Moneda y Monto",
  "Tipo de proceso",
  "Observaciones",
  "Fecha",
  "Estado",
];
console.log(headers2);
export const SecondPart = ({ headers = headers2 }) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-borderless">
          <thead>
            <tr className="table-secondary">
              {headers.map((header) => (
                <th scope="col" key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">00001</th>
              <td>Ingreso</td>
              <td>Bono Ley</td>
              <td>00/00/00000</td>
              <td>
                <div className="d-flex flex-column">
                  <p className="m-0">
                    <b>SOLES</b>
                  </p>
                  <p className="m-0 fs-6">3000.00</p>
                </div>
              </td>
              <td>Todos</td>
              <td>Ninguna</td>
              <td>00/00/00000</td>
              <td>
                <span className={`badge bg-success bg-inline-success`}>
                  Activo
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">00001</th>
              <td>Ingreso</td>
              <td>Bono Ley</td>
              <td>00/00/00000</td>
              <td>
                <div className="d-flex flex-column">
                  <p className="m-0">
                    <b>SOLES</b>
                  </p>
                  <p className="m-0 fs-6">3000.00</p>
                </div>
              </td>
              <td>Todos</td>
              <td>Ninguna</td>
              <td>00/00/00000</td>
              <td>
                <span className={`badge bg-success bg-inline-success`}>
                  Activo
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
