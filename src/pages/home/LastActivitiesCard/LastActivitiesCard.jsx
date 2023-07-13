
import { ActivityBox } from './ActivityBox'
import './styles.css'


export const LastActivitiesCard = ( { activities, handleAddActivity } ) => {

  return (
    <>

        <div className="container p-2 card-custom mb-2">
          <div className="container position-relative mt-3">
            <h5 className="title-lastActivities">
              Actividades Recientes
            </h5>            
            <button className="floatbutton" onClick={handleAddActivity}>+</button>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="container mx-auto">
                <div className="row flex-nowrap align-items-center overflow-auto">
                  <div className="col-3">
                    <div className="header-cardActivities text-truncate">Hora</div>
                  </div>
                  <div className="col-6">
                    <div className='header-cardActivities text-truncate'>Actividad reciente</div>
                  </div>
                  <div className="col-3">
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
    </>
  )
}
