import './AutoForm.css';

export const AutoForm = () => {

    return (
        <>
            <div className='container'>
                <form className="row g-3 needs-validation" novalidate>
                    <div className="col-md-4">
                        <label for="validationCustom01" className="form-label">Marca</label>
                        <input type="text" className="form-control" id="validationCustom01" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom02" className="form-label">Modelo</label>
                        <input type="text" className="form-control" id="validationCustom02" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom02" className="form-label">Año</label>
                        <input type="text" className="form-control" id="validationCustom02" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom02" className="form-label">Kilometraje</label>
                        <input type="text" className="form-control" id="validationCustom02" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustomUsername" className="form-label">Precio</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">$</span>
                            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom02" className="form-label">Descripcion</label>
                        <input type="text" className="form-control" id="validationCustom02" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationCustom04" className="form-label">Tipo</label>
                        <select className="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Elegir</option>
                            <option>Sedán</option>
                            <option>Coupé</option>
                            <option>Hatchback</option>
                            <option>Camioneta</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom02" className="form-label">Version</label>
                        <input type="text" className="form-control" id="validationCustom02" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom02" className="form-label">Color</label>
                        <input type="text" className="form-control" id="validationCustom02" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationCustom04" className="form-label">Combustible</label>
                        <select className="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Elegir</option>
                            <option>Gasolina</option>
                            <option>Diésel</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom02" className="form-label">Puertas</label>
                        <input type="text" className="form-control" id="validationCustom02" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationCustom04" className="form-label">Transmicion</label>
                        <select className="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Elegir</option>
                            <option>Manual</option>
                            <option>Automatica</option>
                            <option>CVT</option>
                            <option>Doble Embrague</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom02" className="form-label">Motor</label>
                        <input type="text" className="form-control" id="validationCustom02" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Crear</button>
                    </div>
                </form>
            </div>
        </>
    )
}