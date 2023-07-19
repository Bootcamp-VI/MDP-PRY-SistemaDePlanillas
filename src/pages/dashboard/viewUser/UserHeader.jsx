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
            <h1 className="fs-4 text-capitalize fw-bold">Perfil de Empleado</h1>
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
        <div className="card py-3 rounded-5">
          <div className="d-sm-block d-md-flex text-center">
            <div>
              <div>
                <img
                  src={user_data.foto}
                  className="img-fluid rounded-4 w-50"
                  alt="Foto de perfil"
                />
              </div>
              <h5 className="m-0 text-center mt-2 fs-5">
                DNI:{EmployeData.documento}
              </h5>
            </div>
            <div className="flex-grow-1">
              <div className="d-md-flex justify-content-between align-items-center">
                <div className="d-md-flex gap-3 align-items-center">
                  <h3 className="">
                    {EmployeData.nombre +
                      " " +
                      EmployeData.apellidoPaterno +
                      " " +
                      EmployeData.apellidoMaterno}
                  </h3>
                  <img
                    className=""
                    src={`https://flagsapi.com/${EmployeData.codigoPais}/flat/64.png`}
                    style={{ width: "60px" }}
                  ></img>
                </div>
                {/* <h3 className="col-md-2 col-2">{EmployeData.pais}</h3> */}
                <div className="d-none d-md-block me-2">
                  <button className="btn btn-secondary">
                    Editar <LuEdit />
                  </button>
                </div>
              </div>
              <div className="text-md-start">
                <h5 className="">
                  <MdPerson2 /> {EmployeData.datosLaborales.cargo}
                </h5>
                <h5 className="">
                  <MdLocationPin />{" "}
                  {EmployeData.datosResidencia.distrito +
                    ", " +
                    EmployeData.datosResidencia.departamento}
                </h5>
                <h5 className="">
                  <MdAlternateEmail /> {EmployeData.datosContacto.correoEmpresa}
                </h5>
                <h5 className="">
                  <MdLocalPhone /> {EmployeData.datosContacto.celular}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
