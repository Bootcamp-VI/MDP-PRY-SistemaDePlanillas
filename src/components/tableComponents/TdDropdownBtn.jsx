import PropTypes from "prop-types";

function TdDropdownBtn({ buttonName, actions, onSelectAction }) {
  return (
    <td>
      <div className="dropdown">
        <button
          className="btn btn-sm btn-dark btn-dark-important dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {buttonName}
        </button>
        <ul className="dropdown-menu bg-secondary btn-dark-important">
          {actions.map((action, index) => (
            <li key={index}>
              <a className="dropdown-item btn-dark-important" href="#" onClick={() => onSelectAction(action.action)}>
                {action.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </td>
  );
}

TdDropdownBtn.propTypes = {
  buttonName: PropTypes.string.isRequired,
  actions: PropTypes.array.isRequired,
  onSelectAction: PropTypes.func.isRequired,
};

export default TdDropdownBtn;
