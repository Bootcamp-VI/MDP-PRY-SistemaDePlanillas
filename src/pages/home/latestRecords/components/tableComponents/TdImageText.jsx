import PropTypes from "prop-types";

function TdImageText(props) {
  const primaryText = props.primaryText;
  const secondaryText = props.secondaryText;
  const urlImage = props.urlImage;
  const maxWidthPx = props.maxWidthPx;

  return (
    <td>
      <div className="d-flex flex-row align-items-center">
        <div className="square-image">
          <img
            src={urlImage}
            alt="Imagen"
            className="img-fluid border rounded mx-3"
            style={{ maxWidth: maxWidthPx }} // Sin las llaves adicionales
          />
        </div>
        <div className="">
          <b>{primaryText}</b>
          <p className="mb-0">{secondaryText}</p>
        </div>
      </div>
    </td>
  );
}

TdImageText.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  maxWidthPx: PropTypes.string.isRequired,
};

export default TdImageText;
