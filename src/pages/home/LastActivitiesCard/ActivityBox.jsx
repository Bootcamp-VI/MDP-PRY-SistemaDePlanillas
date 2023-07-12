
export const ActivityBox = ({ activity }) => {
    return (
      <div className="row flex-nowrap align-items-center mt-2">
        <div className="col-2">
          <div className="text-hour-activity">{activity.hour}</div>
        </div>
        <div className="col-1 status-activity">
            <img src="../../src/assets/icons/dashboard/action1.png" alt="" />
          <div className="lineagris" />
        </div>
        <div className="col-7">
          <div className="text-name-activity mx-1 text-truncate">
            {activity.name}
          </div>
        </div>
        <div className="col-2 userimg">
          <img
            className="img-user-type"
            src={`../../src/assets/icons/typeUser/${activity.typeUser === 'usuario' ? 'green' : 'blue' }-24.png`}
            alt="userimg"
          />
        </div>
      </div>
    );
  };
  