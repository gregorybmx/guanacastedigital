import React, {useState} from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import InputComponent from '../components/InputComponent'
import ButtonComponent from '../components/ButtonComponent';

import logo from '../img/gd_logo.png'

const Login = () => {

    const[showPassword, setShowPassword] = useState(false);

        return (
            <div className="login-wrapper">
                <div className="login-wrapper-content">
                    <form>

                        <div id='gdLogo'>
                            <img src={logo} className="d-block w-100 mb-3" alt='logotipo de Guanacaste Digital' />
                        </div>

                        <div className='rectangle text-center mb-3'>
                            Inicio de Sesión
                        </div>

                        <div className='mb-3'>

                            <InputComponent
                                type="email"
                                className='form-control'
                                placeholder='Correo Electrónico'
                                tooltiptext="Ingrese su correo electrónico">
                            </InputComponent>
                        </div>

                        <div className='mb-3'>
                            <InputComponent
                                type={showPassword? "text" : "password"}
                                className='form-control'
                                placeholder='Contraseña'
                                tooltiptext="Ingrese su contraseña">
                            </InputComponent>

                            <div className='position-absolute pointer pwd-icon' onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <BiShow/> : <BiHide/>}
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
                            <div className='custom-control custom-checkbox'>
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

                        <div className="d-grid">
                            <ButtonComponent
                                type="submit" 
                                className="btn btn-primary"
                                content='INGRESAR'
                            ></ButtonComponent>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
export default Login