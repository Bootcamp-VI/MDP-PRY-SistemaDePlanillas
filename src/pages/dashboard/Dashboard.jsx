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
    </div>
  );
}

export default Dashboard;
