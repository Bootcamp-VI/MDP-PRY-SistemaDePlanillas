import { FirstPart } from "./FirstPart";
import { SecondPart } from "./SecondPart";

export const Modal = ({ modalTitle = "Agregar Cuenta Bancaria" }) => {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Click me
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                {modalTitle}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
                {/* Aqui van los componentes */}
                <FirstPart/>
                <SecondPart/>
            </div>
            <div class="modal-footer text-center d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" class="btn btn-primary">
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
