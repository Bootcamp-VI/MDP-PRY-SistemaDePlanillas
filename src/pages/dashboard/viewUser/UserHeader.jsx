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
  return (
    <>
      <div className="container border-1 rounded-3 bg-white p-3">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center">
            <div>
              <img
                src={user_data.foto}
                style={{ width: "160px" }}
                className="img-fluid rounded-1"
                alt="Foto de perfil"
              />
            </div>
            <p className="m-0 text-center fs-6">DNI:{EmployeData.documento}</p>
          </div>
          <div className="col-lg-5 col-md-8 col-sm-12 d-flex align-items-center justify-content-center px-0 mx-0">
            <ul className="p-0">
              <li className="d-flex align-items-center">
                <p className="fs-6 m-0">
                  {EmployeData.nombre} {EmployeData.apellidoPaterno}{" "}
                  {EmployeData.apellidoMaterno}
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
                <MdLocationPin />{" "}
                {EmployeData.datosResidencia.distrito +
                  ", " +
                  EmployeData.datosResidencia.departamento}
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
    </>
  );
};
