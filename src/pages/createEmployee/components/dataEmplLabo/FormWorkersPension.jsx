function FormWorkersPension() {
    return (
        <>
            <div className="row mx-3 mt-3">
                <h5 className="text-start my-3">Pensión</h5>
                <div className="col-lg-6">
                    <label className="form-label">Régimen:</label>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text" id="addon-wrapping">
                            <i className="fa-regular fa-keyboard"> </i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="addon-wrapping"
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <label className="form-label">AFP:</label>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text" id="addon-wrapping">
                            <i className="fa-regular fa-keyboard"> </i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="addon-wrapping"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormWorkersPension
