import TdSimple from "../../../components/tableComponents/TdSimple";
import TdDouble from "../../../components/tableComponents/TdDouble";
import TheadRow from "../../../components/tableComponents/TheaderRow";

function TableConcepts() {
  return (
    <div>
      <div className="table-responsive mx-3">
        <table className="table">
          <TheadRow
            columnNames={["N°", "Tipo concepto", "Concepto", "Periodo", "Moneda", "Tipo proceso", "Observaciones", "Fecha Modificacion"]}
          />
          <tbody>
            <tr>
              <TdSimple text={"1"} />
              <TdSimple text={"a"} />
              <TdSimple text={"a"} />
              <TdSimple text={"a"} />
              <TdDouble primaryText={"Soles"} secondaryText={"400.00"} />
              <TdSimple text={"a"} />
              <TdSimple text={"a"} />
              <TdSimple text={"19/01/00"} />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableConcepts;
