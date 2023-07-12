import './styles.css'


export const LastActivitiesCard = ( { activities } ) => {

  

  return (
    <>

        <div className="container p-2 card-custom mb-2">
          <div className="container mt-3">
            <h5 className="title-lastActivities">
              Actividades Recientes
            </h5>
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

              <div className="last-activities overflow-auto" >

                {
                  activities.map( (activity, index )=> {

                    return (
                      <div 
                      key={activity.id} 
                      className={`row flex-nowrap align-items-center overflow-auto mt-2 activity ${index === 0 ? 'new-activity' : 'old-activity'}`}>
                        <div className="col-2">
                          <div className="text-hour-activity">
                            { activity.hour }
                          </div>
                        </div>
                        <div className="col-1 status-activity ">
                          <img src="../../src/assets/icons/dashboard/action1.png" alt="" />
                          <div className='lineagris'/>
                        </div>
                        <div className="col-7">
                          <div className="text-name-activity mx-1 text-truncate">
                            { activity.name }
                          </div>
                        </div>
                        <div className="col-2 userimg">
                          <img className="img-user-type" src={`../../src/assets/icons/typeUser/${activity.typeUser === 'usuario' ? 'green' :'blue' }-24.png`} alt="userimg" />
                        </div>
                      </div>
                    )
                  })
                }                

              </div>
            </div>
          </div>

        </div>        
    </>
  )
}
