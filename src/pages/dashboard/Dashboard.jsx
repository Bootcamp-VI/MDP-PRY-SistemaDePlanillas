import { ViewUser } from "./viewUser/main";
import { EmployeList } from "../../components/data/EmployedList";
import Card from "../home/grupo3/Card/Card";
import { LastActivitiesCard } from "../home/LastActivitiesCard/LastActivitiesCard";
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
    <>
      <div className="container-activities d-flex flex-wrap justify-content-around align-items-center border rounded mx-2 my-4  p-2">
        <Card typeEmployee="empleados" totalEmployees={100} nameCompany="MDP" />
        <Card typeEmployee="usuarios" totalEmployees={20} nameCompany="MDP" />
        <LastActivitiesCard activities={activities} handleAddActivity={handleAddActivity} />
      </div>
      <LatestRecords />
    </>
  );
}

export default Dashboard;
