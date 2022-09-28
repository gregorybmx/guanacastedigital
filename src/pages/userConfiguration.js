import React from 'react'



const userConfiguration = () => {
    return (

        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <form>
                        <div className="mb-3">
                            <div className="row mb-3">
                                <div className="col">
                                    <input typ="text" className="form-control" placeholder="Nombre" aria-label="First name" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Apellidos" aria-label="Last name" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Ingresa tu Correo Electronico" />
                            </div>

                            <input className="mb-3 form-control" type="text" placeholder="Ingresa tu Numero de Telefono" aria-label="default input example"></input>

                            <div className="mb-3 form-floating">
                                <select className="form-select" id="floatingSelectC" aria-label="FloatingLabel">
                                    <option default value="Elegir canton">Selecciona tu Canton</option>
                                    <option value="1">Liberia</option>
                                    <option value="2">Cañas</option>
                                    <option value="3">Bagaces</option>
                                </select>
                            </div>

                            <div className="mb-3 form-floating">
                                <select className="form-select" id="floatingSelectD" aria-label="FloatingLabel">
                                    <option default value="Elegir Distrito">Selecciona tu Distrito</option>
                                    <option value="1">Liberia</option>
                                    <option value="2">...</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <input type="text" className="form-control" id="inputAddress" placeholder="Ingresa tu Direccion de Facturacion" />
                            </div>

                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Ingresa tu Contraseña" />
                            </div>

                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Verifica tu Contraseña" />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Registrar</button>

                        <button type="button" className="btn btn-danger">Cancelar</button>

                    </form>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default userConfiguration

