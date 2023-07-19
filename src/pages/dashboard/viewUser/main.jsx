import { Modal } from "./Modal";

export const ViewUser = ({ closeModal }) => {
  return (
    <div className="modal fade show" style={{ display: "block" }}>
      <div className="modal-dialog modal-dialog-scrollable modal-lg">
        <div className="modal-content" style={{ backgroundColor: "#F1F1F1" }}>
          <div className="modal-header p-2 mx-2">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Perfil de Empleado
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
          </div>
          <div className="modal-body py-1 px-0">
            <Modal closeModal={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
};
