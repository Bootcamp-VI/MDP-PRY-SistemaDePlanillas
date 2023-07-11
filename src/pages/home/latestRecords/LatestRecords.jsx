import "bootstrap/dist/css/bootstrap.min.css";
import "./LatestRecords.css";
import FiltersHome from "./components/filtersHome";
import TableEmployedHome from "./components/TableEmployedHome";
function LatestRecords() {
  return (
    <>
      <div className="container-fluid px-0 border rounded">
        <FiltersHome />
        <TableEmployedHome/>
      </div>
    </>
  );
}

export default LatestRecords;
