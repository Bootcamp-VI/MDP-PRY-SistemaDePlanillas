import PropTypes from "prop-types";

const TheadRow = ({ columnNames }) => {
  return (
    <thead>
      <tr className="bg-light">
        {columnNames.map((columnName, index) => (
          <th className="bg-secondary-important fc-primary-important" key={index}>
            {columnName}
          </th>
        ))}
      </tr>
    </thead>
  );
};

TheadRow.propTypes = {
  columnNames: PropTypes.array.isRequired,
};

export default TheadRow;
