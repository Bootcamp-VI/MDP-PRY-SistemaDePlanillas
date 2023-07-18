import { Modal } from "./Modal";

export const ViewUser = ({closeModal} ) => {
  return (
    <>
    <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog" style={{ maxWidth: "800px" }}>
          <div className="modal-content" style={{ backgroundColor: "#F1F1F1" }}>
            <div className="modal-body">
              <Modal  closeModal = {closeModal}/>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
