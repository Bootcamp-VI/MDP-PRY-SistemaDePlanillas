import PropTypes from "prop-types";

const TableHeaderRow = ({ columnNames }) => {
  return (
    <thead>
      <tr className="bg-light">
        {columnNames.map((columnName, index) => (
          <th key={index}>{columnName}</th>
        ))}
      </tr>
    </thead>
  );
};

TableHeaderRow.propTypes = {
  columnNames: PropTypes.array.isRequired,
};

export default TableHeaderRow;
