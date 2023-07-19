import "bootstrap/dist/css/bootstrap.min.css";
import "./LatestRecords.css";
import FiltersHome from "./components/filtersHome";
import TableEmployeeHome from "../latestRecords/components/TableEmployedHome";
function LatestRecords() {
  return (
    <>
      <div className="container-fluid px-0 border rounded bg-white">
        <FiltersHome />
        <TableEmployeeHome />
      </div>
    </>
  );
}

export default LatestRecords;
