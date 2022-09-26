import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi'
import { FaKey } from 'react-icons/fa'
import { ImGoogle3 } from 'react-icons/im'
import { FaFacebook } from 'react-icons/fa'
import InputComponent from '../components/InputComponent'
import ButtonComponent from '../components/ButtonComponent';

import logo from '../img/gd_logo.png'

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login-wrapper">
            <div className="login-wrapper-content">
                <form>

                    <div id='gdLogo'>
                        <img src={logo} className="d-block w-100 mb-3" alt='logotipo de Guanacaste Digital' />
                    </div>

                    <div className='title-underline text-center mb-3'></div>

                    <div className='form-control mb-3'>

                        <div className='position-absolute pointer d-inline-flex mt-1 mr-1'>
                            <h3><FiMail /></h3>
                        </div>
                        <InputComponent
                            type="email"
                            className='form-control d-inline-flex text-field'
                            placeholder='Correo Electrónico'
                            tooltiptext="Ingrese su correo electrónico">
                        </InputComponent>
                    </div>

                    <div className='form-control mb-3'>

                        <div className='position-absolute pointer pwd-icon d-inline-flex mt-1 ml-1'>
                            <h3><FaKey /></h3>
                        </div>

                        <InputComponent
                            type={showPassword ? "text" : "password"}
                            className='form-control d-inline-flex text-field'
                            placeholder='Contraseña'
                            tooltiptext="Ingrese su contraseña">
                        </InputComponent>

                        <div className='position-absolute pointer pwd-icon d-inline-flex mt-1 mr-1' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <h3><BiShow /></h3> : <h3><BiHide /></h3>}
                        </div>

                    </div>

                    <p className='forgot-password text-center'>
                        <a
                            href="forgotpwd "
                            data-toggle='tooltip'
                            title="Haga clic aqui para recuperar su contraseña"
                        >¿OLVIDASTE TU CONTRASEÑA?</a>
                    </p>

                    <div className='mb-3'>
                        <div className='custom-control custom-checkbox mt-2'>
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />

                            <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                                data-toggle='tooltip'
                                title="Seleccione esta opcion si desea recordar sus datos">
                                RECORDAR CUENTA
                            </label>
                        </div>
                    </div>

                    <div className="d-block text-center m-auto">
                        <ButtonComponent
                            type="submit"
                            className="btn btn-primary btn-form"
                            content='INGRESAR'>
                        </ButtonComponent>
                    </div>

                    <div className='mt-3'>

                        <div className='d-flex justify-content-around'>

                            <div className='alt-login-metod-line text-center m-auto'></div>

                            <p className='m-auto'>O INICIA SESIÓN CON</p>

                            <div className='alt-login-metod-line text-center m-auto'></div>

                        </div>

                        <div className='d-flex justify-content-center'>

                            <a
                                className='logo-fb'                                
                                href='fb'
                                data-toggle='tooltip'
                                title='Iniciar sesión con Facebook'><h1><FaFacebook/></h1></a>

                            <a className='g-logo'
                                href='google'
                                data-toggle='tooltip'
                                title='Iniciar sesión con Google'><h1><ImGoogle3/></h1></a>
                        </div>

                        <p className='text-center'>
                            ¿Aún no estas registrado?
                            <a
                                href="registro"
                                data-toggle='tooltip'
                                title="Haga clic aqui para registrarte">
                                Regístrate
                            </a>
                        </p>

                    </div>

                </form>
            </div>
        </div>
    )
}
export default Login