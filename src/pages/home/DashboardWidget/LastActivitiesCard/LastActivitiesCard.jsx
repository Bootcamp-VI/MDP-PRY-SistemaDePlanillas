import { useState, useEffect } from 'react';
import { ActivityBox } from './ActivityBox';
import './styles.css';

export const LastActivitiesCard = ({ activities, handleAddActivity }) => {
  const [showActivities, setShowActivities] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowActivities(true);
      } else {
        setShowActivities(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize); 

    return () => {
    window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    
      <div className={`card-custom d-md-block border p-1 ${showActivities ? 'd-none' : 'd-block'}`}>
        <div className="container position-relative py-3 ">
          <h5 className="title-lastActivities">Actividades Recientes</h5>
          <button className="floatbutton1" onClick={() => setShowActivities(!showActivities)}>-</button>
          <button className="floatbutton" onClick={handleAddActivity}>+</button>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="container mx-auto">
              <div className="row flex-nowrap align-items-center overflow-auto">
                <div className="col-4 ">
                  <div className="header-cardActivities text-truncate">Hora</div>
                </div>
                <div className="col-5 ">
                  <div className='header-cardActivities text-truncate'>Actividad reciente</div>
                </div>
                <div className="col-3 ">
                  <div className='header-cardActivities-img text-center ps-3'>
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

    <div className={`card d-md-none card-mini-act m-auto bg-light border-1 rounded-3 ${!showActivities ? 'd-none' : 'd-block'}`} style={{  width: "365px" }}>
        <div className="card-body d-flex justify-content-between align-items-center py-3">
          <h6 className="card-title text-dark  fw-bold me-1 mb-0">Actividades Recientes</h6>
          <a onClick={() => setShowActivities(!showActivities)} className="btn btn-sm text-primary">Ver más</a>
        </div>      
    </div>


    </>
  )
}
