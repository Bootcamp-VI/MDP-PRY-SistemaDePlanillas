import { ViewUser } from "./viewUser/main";
import { EmployeList } from "../../components/data/EmployedList";
import Card from "../home/grupo3/Card/Card";
import { LastActivitiesCard } from "../home/LastActivitiesCard/LastActivitiesCard";

import { lastActivities  } from "../../components/data/lastActivities";
import { useEffect, useState } from "react";

function Dashboard() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setActivities(lastActivities.data);
  }, []);

  const handleAddActivity = () => {

    const newActivity = {
      id: new Date().getTime(),
      name: 'Actividad nueva',
      hour: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      typeUser: 'usuario'
    };

    setActivities([newActivity, ...activities]);
    
  }
  

  return (
    <>

    <div className="container d-flex flex-wrap justify-content-around border rounded mx-2 my-4  p-2">
      <Card typeEmployee="empleados" totalEmployees={100} nameCompany="MDP"/>
      <Card typeEmployee="usuarios" totalEmployees={20} nameCompany="MDP"/>
      <LastActivitiesCard activities={activities} handleAddActivity={handleAddActivity}/>

    </div>


    <div className="container-fluid border rounded m-2 p-2">      
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Empleado</th>
              <th>Documento</th>
              <th>Sueldo</th>
              <th>Planilla</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {EmployeList.map((registro, index) => (
              <tr key={index}>
                <td>{registro.codigo}</td>
                <td>{registro.empleado}</td>
                <td>{registro.documento}</td>
                <td>{registro.sueldo}</td>
                <td>
                  <input type="checkbox" defaultChecked={registro.planilla} />
                </td>
                <td>
                  <span className={`badge ${registro.estado === "Activo" ? "bg-success" : "bg-warning"}`}>{registro.estado}</span>
                </td>
                <td>
                  <button className="btn btn-warning btn-sm m-1">
                    <i className="fas fa-pencil-alt"></i>
                  </button>

                  <button type="button" className="btn btn-info btn-sm m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="fas fa-search"></i>
                  </button>
                  <div className="modal fade" id="exampleModal" tabIndex="-1">
                    <div className="modal-dialog" style={{ maxWidth: "980px" }}>
                      <div className="modal-content" style={{ backgroundColor: "#F1F1F1" }}>
                        <ViewUser />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
    </>
  );
}

export default Dashboard;
