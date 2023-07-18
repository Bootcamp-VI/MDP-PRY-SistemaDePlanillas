import user_data from "../../../components/data/profile.json";
import {
  MdAlternateEmail,
  MdPerson2,
  MdLocationPin,
  MdLocalPhone,
} from "react-icons/md";
import { LuEdit } from "react-icons/lu";
import { useState } from "react";
import { useEffect } from "react";

export const UserHeader = ({ closeModal, EmployeData, index }) => {
  console.log("x2", EmployeData);
  return (
    <>
      <div className="p-0">
        <div className="row p-0 d-flex align-items-center ">
          <div className="col d-md-none">
            <button className="btn btn-secondary">
              <LuEdit />
            </button>
          </div>
          {/* <div className="col-8 col-md-11 text-center mx-auto"> */}
          <div className="col-8 col-md-11">
            <h5>
              <strong>Perfil de Empleado</strong>
            </h5>
          </div>
          <div className="col text-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
        </div>
        <div className="card py-3">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="text-center">
                <img
                  src={user_data.foto}
                  style={{ width: "180px" }}
                  className="img-fluid rounded-1"
                  alt="Foto de perfil"
                />
              </div>
              <p className="m-0 text-center fs-6">DNI:{EmployeData.documento}</p>
            </div>
            <div className="col-md-8 col-12">
              <div className=" row d-flex align-items-center ">
                <p class="col-md-7 col-10 fs-6">
                  {EmployeData.nombre +
                    " " +
                    EmployeData.apellidoPaterno +
                    " " +
                    EmployeData.apellidoMaterno}
                </p>
                <img
                  className="col-md-2 col-2"
                  src={`https://flagsapi.com/${EmployeData.codigoPais}/flat/64.png`}
                  style={{ width: "60px" }}
                ></img>
                {/* <h3 className="col-md-2 col-2">{EmployeData.pais}</h3> */}
                <div className="col-md-3 col-12 d-none d-md-block">
                  <button className="btn btn-sm btn-secondary  ">
                    Editar <LuEdit />
                  </button>
                </div>
              </div>
              <div className="row">
                <p className="col-12 mb-2 fs-6">
                  <MdPerson2 /> {EmployeData.datosLaborales.cargo}
                </p>
                <p className="col-12 mb-2 fs-6">
                  <MdLocationPin />{" "}
                  {EmployeData.datosResidencia.distrito +
                    ", " +
                    EmployeData.datosResidencia.departamento}
                </p>
                <p className="col-12 mb-2 fs-6">
                  <MdAlternateEmail /> {EmployeData.datosContacto.correoEmpresa}
                </p>
                <p className="col-12 mb-0 fs-6">
                  <MdLocalPhone /> {EmployeData.datosContacto.celular}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
