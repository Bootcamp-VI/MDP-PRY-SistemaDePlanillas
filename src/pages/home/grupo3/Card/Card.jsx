import { FaBuildingUser, FaUser } from 'react-icons/fa6';
import a from '../Card/Top.svg'

function Card() {

  const svgBackgroundStyles = {
    backgroundImage: 'red',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div className="card bg-danger" style={{width: '365px', height:'242px'}}>
      <div className="card-header row ">
        <h5 className="col">Empleados</h5>
        <div class="dropdown col ">
          <button class="btn btn-outline-secundary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Exportar
          </button>
          <ul class="dropdown-menu ">
            <li><a class="dropdown-item" href="#">PDF</a></li>
            <li><a class="dropdown-item" href="#">XSL</a></li>
            <li><a class="dropdown-item" href="#">JPG</a></li>
          </ul>
        </div>
      </div>
      <div className="card-body  bg-danger">
        <div className="card d-flex justify-content-end text-info " style={{width: '160px', height:'120px', position: 'absolute', right: '20px', bottom: '20px'}}>

          <div className='text-center' style={{}}>
            <div></div>
            <div className="icon-container text-primary col">
              <FaBuildingUser size={32} />
            </div>
            <div className=''>

            Empleados MDP
            </div>

          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className='font-weight-bold'>100</div>
        Empleados registrados
      </div>
    </div>
  )
}

export default Card