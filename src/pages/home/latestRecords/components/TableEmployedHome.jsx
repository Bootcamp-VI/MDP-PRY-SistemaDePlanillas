import PropTypes from "prop-types";
import TdSimple from "./tableComponents/TdSimple";
import TdDouble from "./tableComponents/TdDouble";
import TdImageText from "./tableComponents/TdImageText";
import TdState from "./tableComponents/TdState";
import TdDropdownBtn from "./tableComponents/TdDropdownBtn";
import TableHeaderRow from "./tableComponents/TableHeaderRow";
import { EmployeList } from "../../../../components/data/EmployedList";

function TableEmployedHome() {
  const columnNames = ['Código', 'Empleado', 'Documento', 'Sueldo', 'Planilla', 'Estado', 'Acción'];
  const actions = [
    { label: "Ver", action: "view" },
    { label: "Editar", action: "edit" },
    { label: "Eliminar", action: "delete" },
  ];

  const handleActionSelect = (action) => {
    // Realiza la acción correspondiente según la opción seleccionada
    if (action === "view") {
      // Acción para ver
    } else if (action === "edit") {
      // Acción para editar
    } else if (action === "delete") {
      // Acción para eliminar
    }
  };
  return (
    <div className="table-responsive">
      <table className="table">
        <TableHeaderRow columnNames={columnNames} />
        <tbody>
          {EmployeList.map((registro, index) => (
            <tr key={index}>
              <TdSimple text={registro.codigo} />
              <TdImageText
                primaryText={registro.empleado}
                secondaryText="00/00/00000"
                urlImage="../../src/assets/images/perfil2.jpg"
                maxWidthPx="45px"
              />
              <TdDouble primaryText={registro.documento} secondaryText={"DNI"} />
              <TdDouble primaryText={registro.sueldo} secondaryText={"Paid"} />
              <TdSimple text={registro.planilla === false ? "Planilla" : "RxH"} />
              <TdState stateValue={registro.estado} stateTrue="Activo" stateFalse="Inactivo" />
              <TdDropdownBtn buttonName="Acciones" actions={actions} onSelectAction={handleActionSelect} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default TableEmployedHome;
