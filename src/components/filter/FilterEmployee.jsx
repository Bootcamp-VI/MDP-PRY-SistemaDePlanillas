import { MdAddCircleOutline } from "react-icons/md";

const FilterEmployee = ({title}) => {

    return (
        <>
            <div className="container border rounded my-2 d-flex flex-column">
                <h2 className="my-2">{title}</h2>
                <div className="d-flex flex-row my-2 justify-content-between">    
                    <div className="d-flex flex-ro col-md-3 md-px-4">
                        <input type="text" className="form-control form-control-sm p-2" id="searcher" placeholder="Buscar por..."/>
                        <select className="form-select" id="inputGroupSelect01">
                            <option>Seleccione</option>
                            <option>DNI</option>
                            <option>CE</option>
                            <option>PP</option>
                        </select>
                        <div className="d-inline-flex align-items-center">
                            <label><b>RxH:</b></label>
                            <select className="form-select" id="inputGroupSelect01">
                                <option>Planilla</option>
                                <option>Practicante</option>
                                <option>Externo</option>
                            </select>
                        </div>
                    </div>
                    <button className=""><MdAddCircleOutline></MdAddCircleOutline>Agregar</button>
                </div>
            </div>
        </>
    )
}

export default FilterEmployee