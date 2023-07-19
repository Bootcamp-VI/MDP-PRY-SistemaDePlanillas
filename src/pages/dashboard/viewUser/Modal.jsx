import { EmployeList } from "./data/EmployeeProfile";
import { UserHeader } from "./UserHeader";
import { UserContent } from "./UserContent";
import { useState } from "react";
import { useEffect } from "react";

export const Modal = ({ closeModal }) => {
  const [EmployeData, setEmployeData] = useState([]);
  useEffect(() => {
    setEmployeData(EmployeList.data);
  }, []);
  console.log("Aaca", EmployeList.data);
  return (
    <>
      {EmployeData ? (
        <div className="row m-0 mx-sm-3">
          {EmployeList.data.map((EmployeData, index) => (
            <UserHeader closeModal={closeModal} key={EmployeData.id} EmployeData={EmployeData} index={index} />
          ))}
          {EmployeList.data.map((EmployeData, index) => (
            <UserContent key={EmployeData.id} EmployeData={EmployeData} index={index} />
          ))}
        </div>
      ) : (
        <div>Esperando</div>
      )}
    </>
  );
};
