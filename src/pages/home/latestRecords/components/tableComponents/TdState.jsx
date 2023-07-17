import PropTypes from "prop-types";

function TdState(props) {
  const stateValue = props.stateValue;
  const stateTrue = props.stateTrue;
  const stateFalse = props.stateFalse;
  return (
    <td>
      <span className={`badge ${stateValue === stateTrue ? "bg-success bg-inline-success" : "bg-warning bg-inline-warning"}`}>
        {stateValue === stateTrue ? stateTrue : stateFalse}
      </span>
    </td>
  );
}

TdState.propTypes = {
  stateValue: PropTypes.string.isRequired,
  stateTrue: PropTypes.string.isRequired,
  stateFalse: PropTypes.string.isRequired,
};

export default TdState;
