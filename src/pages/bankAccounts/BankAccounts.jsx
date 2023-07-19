import FilterEmployee from "../../components/filter/FilterEmployee"
import TableBankAccounts from "./components/TableBankAccounts"

function Concepts() {
    return (
        <div className="container-fluid border rounded container-lg my-2">
            <FilterEmployee title={"Cuentas Bancarias por Empleado"} EmployeeName={"Sanchez Marin"}></FilterEmployee>
            <TableBankAccounts />
        </div>
    )
}

export default Concepts