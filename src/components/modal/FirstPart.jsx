import React from 'react';

export const FirstPart = () => {
  return (
    <>
    
    <div className="container-fluid py-3" style={{ background: '#f5f8fa' }}>
        <div className="row">
            <div className="col-md-3">
                <div className="form-check">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="type"
                    onChange={() => {}}
                    />
                    <label className="form-check-label" for="type">
                    Tipo
                    </label>
                </div>
                <div className="form-check">
                    <input
                    type="radio"
                    className="form-check-input"
                    name="type"
                    id="type1"
                    value="codigo"
                    onChange={() => {}}
                    />
                    <label for="type1">Código</label>
                </div>
                <div className="form-check">
                    <input
                    type="radio"
                    className="form-check-input"
                    name="type"
                    id="type2"
                    value="descripcion"
                    onChange={() => {}}
                    />
                    <label for="type2">Descripción</label>
                </div>
            </div>
                        <div className="col-md">
                            <div className="row">
                            <div className="col-md-4">
                            <div className="input-group">
                        <select className="form-control custom-tri" id="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        </select>
                        <div className='input-group-text'>
                        <i for="select" className="fa-solid fa-play fa-rotate-90"></i>
                        </div>

                    </div>
                    </div>
                    <div className="col-6">
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control"
                        id="content"
                        placeholder='(Nulo)'
                        onChange={() => {}}
                        />
                    </div>
                    </div>
                    <div className="col-2">
                    <button
                        className="btn btn-outline-secondary custom"
                        type="button"
                    >
                        <i className="fa-solid fa-ellipsis"></i>
                    </button>
                    </div>
                </div>
                <div className="row">
                    <div className="input-group mt-2">
                    <input
                        type="text"
                        className="form-control  bg-white"
                        placeholder="Bono"
                        aria-label="Bono"
                        aria-describedby="search-icon"

                    />
                    <div
                        className="input-group-text"
                        type="button"
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    
    
    </>
  );
};
