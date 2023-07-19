import { ContentSection } from "./ContentSection";
import { useState } from "react";
import WizarEmpleado from "./WizarEmpleado";
import { FaUser, FaBriefcase } from "react-icons/fa";
import "./modalStyles.css";

export const UserContent = (EmployeData, index) => {
  let sectionName = ["Section 1", "Section 2"];
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <>
      {/* <SectionWizard sectionName={(sectionName = 1)} />  */}
      <div className="container p-0 my-2 rounded button-container">
        <div className="d-flex flex-column flex-sm-row justify-content-between m-2">
          <button className={`button ${activeButton === 1 ? "active" : ""}`} onClick={() => handleButtonClick(1)}>
            <FaUser className="me-2" style={{ fontSize: "1.5rem" }} /> Información Personal
          </button>
          <button className={`button ${activeButton === 2 ? "active" : ""}`} onClick={() => handleButtonClick(2)}>
            <FaBriefcase className="me-2" style={{ fontSize: "1.5rem" }} /> Información Empleado
          </button>
        </div>
      </div>
      {activeButton === 1 && (
        <>
          <ContentSection sectionName={(sectionName = 1)} EmployeData={EmployeData.EmployeData} />
        </>
      )}
      {activeButton === 2 && (
        <>
          <WizarEmpleado sectionName={(sectionName = 2)} EmployeData={EmployeData.EmployeData} />
        </>
      )}
    </>
  );
};
