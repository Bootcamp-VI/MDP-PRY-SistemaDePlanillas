import PropTypes from "prop-types";

function TdDouble(props) {
  const primaryText = props.primaryText;
  const secondaryText = props.secondaryText;
  return (
    <td>
      <div className="d-flex flex-column">
        <p className="m-0">
          <b>{primaryText}</b>
        </p>
        <p className="text-muted m-0 fs-6">{secondaryText}</p>
      </div>
    </td>
  );
}

TdDouble.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
};

export default TdDouble;
