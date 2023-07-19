import { useState } from "react";
import TdSimple from "../../../components/tableComponents/TdSimple";
import { BankAccountList, getKeyArray } from "../../../components/data/BankAccountList";
import TheadRow from "../../../components/tableComponents/TheaderRow";
import TdStateCheck from "../../../components/tableComponents/TdStateCheck";
import Pagination from "../../../components/tableComponents/Pagination";

function TableBankAccounts() {
  const columnNames = getKeyArray(BankAccountList);

  // begin: For Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = BankAccountList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(BankAccountList.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };
  // end: For Pagination

  return (
    <div>
      <div className="table-responsive mx-3">
        <table className="table">
          <TheadRow columnNames={columnNames} />
          <tbody>
            {currentItems.map((registro, index) => (
              <tr key={index}>
                <TdSimple text={registro.codigo} />
                <TdSimple text={registro.tipoProceso} />
                <TdSimple text={registro.tipoPago} />
                <TdSimple text={registro.banco} />
                <TdSimple text={registro.moneda} />
                <TdSimple text={registro.tipoCuenta} />
                <TdSimple text={registro.numeroCuenta} />
                <TdStateCheck stateValue={registro.proceso} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
        goToPage={goToPage}
        itemsPerPage={itemsPerPage}
        totalItems={BankAccountList.length}
      />
    </div>
  );
}

export default TableBankAccounts;
