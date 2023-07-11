import './styles.css'

export const LastActivitiesCard = () => {
  return (
<div className="container">
  <h3>LastActivitiesCard</h3>

  <div className="d-flex justify-content-around">
    <div className="card bg-danger mx-5">
      <div className="card-header">
        <h3>Empleados</h3>
      </div>
    </div>

    <div className="card bg-info">
      <div className="card-header">
        <h3>Usuarios</h3>
      </div>
    </div>

    <div className="container-fluid p-2 card-custom">
  <div className="container mt-3">
    <h5 className="title-lastActivities">
      Actividades Recientes
    </h5>
  </div>
  <div className="container m-2">
        <div className="row align-items-center">
          <div className="col-sm-2">
            <p className="header-cardActivities text-truncate">Hora</p>
          </div>
          <div className="col-sm-1">
            <p className="header-cardActivities text-truncate"></p>
          </div>
          <div className="col-sm-7">
            <p className="header-cardActivities text-truncate">Actividad reciente</p>
          </div>
          <div className="col-sm-2">
            <p className="header-cardActivities-img mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="6" viewBox="0 0 17 6" fill="none">
                <rect x="11" width="6" height="6" rx="2" fill="#B5B5C3"/>
                <rect width="6" height="6" rx="2" fill="#B5B5C3" fillOpacity="0.7"/>
              </svg>
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-2">
            <div className="text-hour-activity">
              09:00
            </div>
          </div>
          <div className="col-sm-1 status-activity">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="5" stroke="#1BC5BD" strokeWidth="3" />
            </svg>
          </div>
          <div className="col-sm-7">
            <div className="text-activity mx-1 text-truncate">
              Employee added
            </div>
          </div>
          <div className="col-sm-2 userimg">
            <img className="img-user-type" src="../../src/assets/icons/blue-user.jpeg" alt="userimg" />
          </div>
        </div>
      </div>
  </div>



  </div>
</div>
  )
}
