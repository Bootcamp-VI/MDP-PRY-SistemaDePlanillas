import { ActivityBox } from './ActivityBox'
import './styles.css'

export const LastActivitiesCard = ({ activities, handleAddActivity }) => {
  return (
    <>
    
      <div className="container p-2 card-custom mb-2 d-none d-lg-block">
        <div className="container position-relative mt-3">
          <h5 className="title-lastActivities">Actividades Recientes</h5>
          <button className="floatbutton" onClick={handleAddActivity}>+</button>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="container mx-auto">
              <div className="row flex-nowrap align-items-center overflow-auto">
                <div className="col-lg-3 col-md-4 col-12">
                  <div className="header-cardActivities text-truncate">Hora</div>
                </div>
                <div className="col-lg-6 col-md-4 col-12">
                  <div className='header-cardActivities text-truncate'>Actividad reciente</div>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                  <div className='header-cardActivities-img text-start ps-3'>
                    <img src="../../src/assets/icons/dashboard/points.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="last-activities overflow-auto">
              {activities.map((activity, index) => (
                <ActivityBox key={activity.id} index={index} activity={activity} />
              ))}
            </div>
          </div>
        </div>
      </div>

    <div className="container d-lg-none">
      <div className="card bg-light border-1 rounded-3" style={{ width: "100%", maxWidth: "300px", height: "130px" }}>
        <div className="card-body d-flex justify-content-between align-items-center py-3">
          <h6 className="card-title text-dark  fw-bold me-1 mb-0">Actividades Recientes</h6>
          <a className="btn btn-sm text-primary">Ver más</a>
        </div>
      </div>
    </div>




    </>
  )
}
