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
        <section class="border-1 rounded-3 bg-white p-3 d-flex flex-wrap">
          <div className="flex-fill">
            <div className="text-center">
              <img
                src={user_data.foto}
                style={{ width: "160px" }}
                className="img-fluid rounded-1"
                alt="Foto de perfil"
              />
            </div>
            <p className="m-0 text-center fs-6">DNI:{EmployeData.documento}</p>
          </div>
          <div className="flex-fill">
            <div className="d-flex justify-content-between  align-items-center">
              <div className="d-flex align-items-center mx-auto mx-sm-0">
                <p class="fs-6 m-0">
                  {EmployeData.nombre +
                    " " +
                    EmployeData.apellidoPaterno +
                    " " +
                    EmployeData.apellidoMaterno}
                </p>
                <img
                  className="img-fluid ms-2"
                  src={`https://flagsapi.com/${EmployeData.codigoPais}/flat/64.png`}
                  style={{ maxWidth: "30px" }}
                ></img>
              </div>
              <div className="ml-auto d-none d-md-block">
                <button className="btn btn-sm btn-secondary  ">
                  Editar <LuEdit />
                </button>
              </div>
            </div>
            <div className="">
              <p className="mb-2">
                <MdPerson2 /> {EmployeData.datosLaborales.cargo}
              </p>
              <p className="mb-2">
                <MdLocationPin />{" "}
                {EmployeData.datosResidencia.distrito +
                  ", " +
                  EmployeData.datosResidencia.departamento}
              </p>
              <p className="mb-2">
                <MdAlternateEmail /> {EmployeData.datosContacto.correoEmpresa}
              </p>
              <p className="mb-0">
                <MdLocalPhone /> {EmployeData.datosContacto.celular}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
