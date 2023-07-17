import { ContentSection } from "./ContentSection";
import { useState } from "react";
import WizarEmpleado from "./WizarEmpleado";

export const UserContent = (EmployeData, index) => {
  console.log("x3", EmployeData)
  let sectionName = ["Section 1", "Section 2"];
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <>
      {/* <SectionWizard sectionName={(sectionName = 1)} /> */}
      <div className="container-fluid px-0">
        <div className="d-flex flex-column flex-sm-row justify-content-between my-2">
          <button
            className={`btn btn-primary btn-md border ${
              activeButton === 1 ? "btn-primary" : "btn-light"
            } flex-fill me-2 mb-2 mb-sm-0`}
            onClick={() => handleButtonClick(1)}
          >
            Información Personal
          </button>
          <button
            className={`btn btn-primary btn-md border ${
              activeButton === 2 ? "btn-primary" : "btn-light"
            } flex-fill me-2 mb-2 mb-sm-0`}
            onClick={() => handleButtonClick(2)}
          >
            Informacion Empleado
          </button>
        </div>
      </div>
        {activeButton === 1 && (
          <>
            <ContentSection sectionName={(sectionName = 1)} EmployeData ={EmployeData.EmployeData}/>
          </>
        )}
        {activeButton === 2 && (
          <>
            <WizarEmpleado sectionName={(sectionName = 2)} EmployeData ={EmployeData.EmployeData}/>
          </>
        )}
    </>
  );
};
