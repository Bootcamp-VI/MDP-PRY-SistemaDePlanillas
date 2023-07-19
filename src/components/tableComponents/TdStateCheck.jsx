import PropTypes from "prop-types";

function TdStateCheck(props) {
  const stateValue = props.stateValue;

  return (
    <td>
      <input
        className="form-check-input mt-0"
        type="checkbox"
        checked={stateValue}
        readOnly
        aria-label="Checkbox for following text input"
      ></input>
    </td>
  );
}

TdStateCheck.propTypes = {
  stateValue: PropTypes.bool.isRequired,
};

export default TdStateCheck;
