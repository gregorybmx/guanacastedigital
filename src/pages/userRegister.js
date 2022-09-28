import React from 'react'
import { useNavigate } from "react-router-dom";
import DinamicModalComponent from '../components/DinamicModalComponent';

import { ImGoogle3 } from 'react-icons/im'
import { FaFacebook } from 'react-icons/fa'

import logo from '../img/gd_logo.png'

const UserRegister = () => {

    const navigate = useNavigate();

    const loginLink = () => {
        navigate("/");
    }

    return (
        <div className='m-3'>
            <div className="user-wrapper">
                <div className="user-wrapper-content">


                    <form>

                        <div id='gdLogo'>
                            <img src={logo} className="d-block w-75 m-auto" alt='logotipo de Guanacaste Digital' />
                        </div>

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

                            <button type="submit" className="btn btn-reg btn-primary me-5">Registrar</button>

                            <button type="button" className="btn btn-reg btn-danger" onClick={loginLink}>Cancelar</button>

                        </div>

                        <div className='mt-3'>

                            <div className='d-flex justify-content-around'>

                                <div className='alt-login-metod-line text-center m-auto'></div>

                                <p className='m-auto'>O REGÍSTRATE CON</p>

                                <div className='alt-login-metod-line text-center m-auto'></div>

                            </div>

                            <div className='d-flex justify-content-center'>

                                <button
                                    className='logo-fb btn-link'
                                    data-toggle='tooltip'
                                    title='Regístrate usando con Facebook'><h1><FaFacebook /></h1></button>

                                <button className='g-logo btn-link'
                                    data-toggle='tooltip'
                                    title='Regístrate usando con Google'><h1><ImGoogle3 /></h1></button>
                            </div>

                            <div className='d-flex justify-content-center'>
                                <DinamicModalComponent
                                class='btn btn-link'
                                title = 'TÉRMINOS Y CONDICIONES'
                                content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
                                ></DinamicModalComponent>
                            </div>
                        </div>
                    </form>
                </div >
            </div>
        </div >
    )
}

export default UserRegister
