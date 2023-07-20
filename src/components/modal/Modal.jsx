import { Button } from "./Button";
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
        class="modal fade modal-lg"
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
            <div class="modal-body p-0">
                {/* Aqui van los componentes */}
                <div className="container">
                <FirstPart/>
                <SecondPart/>
                </div>
            </div>
            <div class="modal-footer text-center d-flex justify-content-center">
              {/* <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" class="btn btn-primary">
                Registrar
              </button> */}
               
              <Button btnName={"Cerrar"} icon={"fa-circle-xmark"} color={"light"}/>
              <Button btnName={"Registrar"} icon={"fa-file-lines"} color={"primary"}/>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
