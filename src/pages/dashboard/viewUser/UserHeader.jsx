import user_data from "../../../components/data/profile.json";
import { MdAlternateEmail, MdPerson2, MdLocationPin, MdLocalPhone } from "react-icons/md";
import { LuEdit } from "react-icons/lu";
import { useState } from "react";
import { useEffect } from "react";

export const UserHeader = ({ closeModal, EmployeData, index }) => {
  console.log("x2", EmployeData);
  return (
    <>
      <div className="container border-1 rounded-3 bg-white p-3">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center">
            <div>
              <img src={user_data.foto} style={{ width: "160px" }} className="img-fluid rounded-1" alt="Foto de perfil" />
            </div>
            <p className="m-0 text-center fs-6">DNI:{EmployeData.documento}</p>
          </div>
          <div className="col-lg-5 col-md-8 col-sm-12 d-flex align-items-center justify-content-center px-0 mx-0">
            <ul className="p-0">
              <li className="d-flex align-items-center">
                <p className="fs-6 m-0">
                  {EmployeData.nombre} {EmployeData.apellidoPaterno} {EmployeData.apellidoMaterno}
                </p>
                <img
                  className="img-fluid ms-2"
                  src={`https://flagsapi.com/${EmployeData.codigoPais}/flat/64.png`}
                  style={{ maxWidth: "30px" }}
                  alt="Bandera"
                />
              </li>
              <li className="list-unstyled">
                <MdPerson2 /> {EmployeData.datosLaborales.cargo}
              </li>
              <li className="list-unstyled">
                <MdLocationPin /> {EmployeData.datosResidencia.distrito + ", " + EmployeData.datosResidencia.departamento}
              </li>
              <li className="list-unstyled">
                <MdAlternateEmail /> {EmployeData.datosContacto.correoEmpresa}
              </li>
              <li className="list-unstyled">
                <MdLocalPhone /> {EmployeData.datosContacto.celular}
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 d-flex align-items-start justify-content-end">
            <button className="btn btn-sm btn-secondary  ">
              Editar <LuEdit />
            </button>
          </div>
        </div>
      </div>
      {/* <div className="p-0">
        <section className="border-1 rounded-3 bg-white p-3 d-flex flex-wrap">
          <div className="flex-fill">
            <div className="text-center">
              <img src={user_data.foto} style={{ width: "160px" }} className="img-fluid rounded-1" alt="Foto de perfil" />
            </div>
            <p className="m-0 text-center fs-6">DNI:{EmployeData.documento}</p>
          </div>
          <div className="flex-fill">
            <div className="d-flex justify-content-between  align-items-center">
              <div className="d-flex align-items-center mx-auto mx-sm-0">
                <p className="fs-6 m-0">{EmployeData.nombre + " " + EmployeData.apellidoPaterno + " " + EmployeData.apellidoMaterno}</p>
                <img
                  className="img-fluid ms-2"
                  src={`https://flagsapi.com/${EmployeData.codigoPais}/flat/64.png`}
                  style={{ maxWidth: "30px" }}
                ></img>
              </div>
              <div className="ml-auto">
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
                <MdLocationPin /> {EmployeData.datosResidencia.distrito + ", " + EmployeData.datosResidencia.departamento}
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
      </div> */}
    </>
  );
};
