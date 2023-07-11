import PropTypes from 'prop-types';

function TdSimple(props) {
  const text = props.text;
  return (
    <td className="font-weight-bold">
      <b>{text}</b>
    </td>
  );
}

TdSimple.propTypes = {
  text: PropTypes.string.isRequired,
}


export default TdSimple;
