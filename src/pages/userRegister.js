import React from 'react'

import logo from '../img/gd_logo.png'

const userRegister = () => {
    return (
        <div className="user-wrapper">
            <div className="user-wrapper-content">
                

                <form>

                    <div id='gdLogo'>
                        <img src={logo} className="d-block w-100 mb-3" alt='logotipo de Guanacaste Digital' />
                    </div>

                    <div className="mb-3">
                        <div className='rectangle text-center mb-3'>
                            Registrate
                        </div>
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
    )
}

export default userRegister
