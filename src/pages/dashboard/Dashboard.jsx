import { ViewUser } from "./viewUser/main";
import { EmployeList } from "../../components/data/EmployedList";
import Card from "../home/DashboardWidget/Card/Card";
import { LastActivitiesCard } from "../home/DashboardWidget/LastActivitiesCard/LastActivitiesCard";
import LatestRecords from "../home/latestRecords/LatestRecords";

import { lastActivities } from "../../components/data/lastActivities";
import { useEffect, useState } from "react";

function Dashboard() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setActivities(lastActivities.data);
  }, []);

  const handleAddActivity = () => {
    const newActivity = {
      id: new Date().getTime(),
      name: "Actividad nueva",
      hour: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      typeUser: "usuario",
    };

    setActivities([newActivity, ...activities]);
  };

  return (
    <div className="container-lg">
      <div className="container-cards-dashboard border rounded p-2 my-2">
        <Card typeEmployee="empleados" totalEmployees={100} nameCompany="MDP" />
        <Card typeEmployee="usuarios" totalEmployees={20} nameCompany="MDP" />
        <LastActivitiesCard activities={activities} handleAddActivity={handleAddActivity} />

      </div>
      <LatestRecords />
      {/* <button
                    type="button"
                    className="btn btn-info btn-sm m-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                  <div className="modal fade" id="exampleModal" tabIndex="-1">
                    <div className="modal-dialog" style={{ maxWidth: "980px" }}>
                      <div
                        className="modal-content"
                        style={{ backgroundColor: "#F1F1F1" }}
                      >
                        <ViewUser />
                      </div>
                    </div>
                  </div> */}
    </div>
    
  );
}

export default Dashboard;
