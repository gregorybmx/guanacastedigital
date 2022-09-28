import React from 'react'

const UserConfiguration = () => {
    return (

        <div className='m-3'>
            <div className="user-wrapper">
                <div className="user-wrapper-content">

                <div className='m-3 text-center'>Configuración de Usuarios</div>

        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Actualiza tus Datos
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <form>

                        <div className="mb-3 mt-3">
                            <div className='title-underline text-center mb-3'>
                            </div>
                            <div className="mb-3 d-flex justify-content-around">
                                <input type="text" className="form-control me-2" placeholder="Nombre" aria-label="First name" />
                                <input type="text" className="form-control" placeholder="Apellidos" aria-label="Last name" />
                            </div>

                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Correo Electrónico" />
                            </div>

                            <input className="mb-3 form-control" type="number" placeholder="Número de Telefono" aria-label="default input example"></input>

                            <div className="mb-3  d-flex justify-content-around">
                                <select className="form-select me-2" id="floatingSelectC" aria-label="FloatingLabel">
                                    <option default value="Elija su cantón">Selecciona tu Cantón</option>
                                    <option value="1">Liberia</option>
                                    <option value="2">Cañas</option>
                                    <option value="3">Bagaces</option>
                                </select>

                                <select className="form-select" id="floatingSelectD" aria-label="FloatingLabel">
                                    <option default value="Elija su Distrito">Selecciona tu Distrito</option>
                                    <option value="1">Liberia</option>
                                    <option value="2">...</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <input type="text" className="form-control" id="inputAddress" placeholder="Ingrese su Direccion de Facturacion" />
                            </div>

                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Contraseña" />
                            </div>

                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Verifica tu Contraseña" />
                            </div>
                        </div>

                        <div className="text-center m-auto d-flex justify-content-center">

                            <button type="submit" className="btn btn-reg btn-primary me-5">Actualizar</button>

                            <button type="button" className="btn btn-reg btn-danger">Cancelar</button>

                        </div>

                        <div className='mt-3'></div>
                    </form>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Registro de Pedidos
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Numero de Pedido</th>
                                <th scope="col">Fecha del Pedido</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Monto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>27/9/2022</td>
                                <td>Completado</td>
                                <td>75000</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>27/9/2022</td>
                                <td>Completado</td>
                                <td>45000</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>27/9/2022</td>
                                <td>Rechazado</td>
                                <td>20000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Productos Favoritos
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">

                </div>
            </div>
        </div>
                </div >
            </div>
        </div >
    )
}

export default UserConfiguration

