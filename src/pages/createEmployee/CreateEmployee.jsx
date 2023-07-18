import { useState } from "react";
import FormPerfil from "./components/dataEmplPerfil/FormPerfil";
import { FormAddressData } from "./components/dataEmplBirthAddress/FormAddressData";
import { FormBirthData } from "./components/dataEmplBirthAddress/FormBirthData";
import FormContactInformation from "./components/dataEmplContact/FormContactInformation";
import FormWorkerData from "./components/dataEmplLabo/FormWorkerData";
import FormWorkersPension from "./components/dataEmplLabo/FormWorkersPension";
import FormOrganizationalData from "./components/dataEmplLabo/FormOrganizationalData";
import FormOtrosDatos from "./components/dataEmplOtros/FormOtrosDatos";

function CreateEmployee() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <div className="container-fluid border rounded container-lg my-2">
      <FormPerfil />
      <div className="container-fluid px-0">
        <div className="d-flex flex-column flex-sm-row justify-content-between my-2">
          <button
            className={`btn btn-success btn-md border ${activeButton === 1 ? "btn-success" : "btn-light"} flex-fill me-2 mb-2 mb-sm-0`}
            onClick={() => handleButtonClick(1)}
          >
            Nacimiento Y Domicilio
          </button>
          <button
            className={`btn btn-success btn-md border ${activeButton === 2 ? "btn-success" : "btn-light"} flex-fill me-2 mb-2 mb-sm-0`}
            onClick={() => handleButtonClick(2)}
          >
            Datos de Contacto
          </button>
          <button
            className={`btn btn-success btn-md border ${activeButton === 3 ? "btn-success" : "btn-light"} flex-fill me-2 mb-2 mb-sm-0`}
            onClick={() => handleButtonClick(3)}
          >
            Datos Laborales
          </button>
          <button
            className={`btn btn-success btn-md border ${activeButton === 4 ? "btn-success" : "btn-light"} flex-fill mb-2 mb-sm-0`}
            onClick={() => handleButtonClick(4)}
          >
            Otros datos
          </button>
        </div>
        <div className="row mx-0">
          <div className="col-12 mx-0 px-0">
            <div className="container-fluid border rounded bg-light p-0">
              <div className="col-md-12 col-lg-12 ">
                {activeButton === 1 && (
                  <>
                    <FormBirthData />
                    <FormAddressData />
                  </>
                )}
                {activeButton === 2 && (
                  <>
                    <FormContactInformation />
                  </>
                )}
                {activeButton === 3 && (
                  <>
                    <FormWorkerData />
                    <FormWorkersPension />
                    <FormOrganizationalData />
                  </>
                )}
                {activeButton === 4 && (
                  <>
                    <FormOtrosDatos />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployee;
