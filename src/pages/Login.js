import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/slices/usuarioSlice';
import { useNavigate } from "react-router-dom";
import { verificarContraseñaLogin, verificarCorreo } from '../functions/verificaciones';
import { BiHide, BiShow } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi'
import { FaKey } from 'react-icons/fa'
import { alertSA } from '../components/SweetAlert';

import logo from '../img/gd_logo.png'

const Login = () => {
    const dispatch = useDispatch();


    const [error, setError] = useState(true)

    const [usuario, setUsuario] = useState({ V_CORREO: '', V_CONTRASENA: '' });

    const [errMsg, setErrMsg] = useState({ V_CORREO: '', V_CONTRASENA: '' });

    const [touched, setTouched] = useState({ V_CORREO: false, V_CONTRASENA: false });

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        for (let key in errMsg) {
            if (errMsg[key] !== '') {
                setError(true);
                return
            }
            else
                setError(false);
        }

    }, [errMsg])

    function isTouched() {
        for (let key in touched) {
            if (!touched[key]) {
                setErrMsg((prevErrMsg) => ({ ...prevErrMsg, [key]: "No debe dejar este espacio vacio" }))
            }
        }
    }

    function loginUsuario(e) {
        e.preventDefault();
        isTouched();


        if (!error) {
            const now = new Date();
            now.setHours(now.getHours() - 6);
            const formattedDate = now.toISOString();
            const sha256 = require('js-sha256');

            const user = { V_CORREO: usuario.V_CORREO, V_CONTRASENA: sha256(usuario.V_CONTRASENA), V_ULTIMO_LOGGEO: formattedDate }

            dispatch(loginUser(user)).then((response) => {
                if (response.payload.status === "success") {
                    setTimeout(() => {
                        alertSA('success', 'Inicio de sesión completo')
                    }, 2000);
    
                    navigate("/");
                }
                else{
                    if(response.payload.resultado === "La contrasena incorrecta")
                    {
                        alertSA('error', 'Error al ingresar', "Contraseña incorrecta")
                    }
                    else if(response.payload.resultado === "El correo electronico no se encuentra registrado"){
                        alertSA('error', 'Error al ingresar', "El correo electrónico no se encuentra registrado")
                    }
                    else
                    {
                        alertSA('error', 'Error al ingresar', response.payload.resultado + " Contacte con el administrador del sistema a la brevedad posible.")
                    }
                }
            });
        }

        else
            alertSA('error', 'Error', "Existen errores en el formulario, verifique los espacios marcados e intente de nuevo")
    }

    const handleButtonMouseEnter = (event) => {
        const btn = document.getElementById("login");
        isTouched();
        btn.focus();
    };

    const navigate = useNavigate();

    const registerLink = () => {
        navigate("/registro");
    }

    return (
        <div className="wrapper">

            <div className="wrapper-content">
                <div id='gdLogo'>
                    <img src={logo} className="d-block w-50 m-auto mt-3" alt='logotipo de Guanacaste Digital' />
                </div>
                <h5 className='mt-4  text-center'>Inicio de Sesión</h5>
                <div className='title-underline text-center mb-3 mt-3'></div>


                <form>
                    <div className='mb-3'>
                        <div className="input-group">
                            <div
                                className={errMsg.V_CORREO !== "" ? ("input-group-text d-flex border border-danger") : ("input-group-text d-flex")}
                                style={{ background: "white" }}>
                                <FiMail />
                            </div>
                            <input
                                type="email"
                                name='V_CORREO'
                                value={usuario.V_CORREO}
                                className={errMsg.V_CORREO !== "" ? ("form-control is-invalid border border-danger") : ("form-control")}
                                placeholder='Correo Electrónico'
                                data-toggle='tooltip'
                                tooltiptext="Ingrese su correo electrónico"
                                onFocus={(e) => setTouched({ ...touched, [e.target.name]: true })}
                                onChange={(e) => setUsuario((prevUsuario) => ({ ...prevUsuario, [e.target.name]: e.target.value }))}
                                onBlur={(e) => setErrMsg({ ...errMsg, [e.target.name]: verificarCorreo(usuario.V_CORREO) })} />
                        </div>
                        {errMsg.V_CORREO !== "" && (<small className="invalid-feedback d-block text-center">{errMsg.V_CORREO}</small>)}

                    </div>

                    <div className='mb-3'>

                        <div className="input-group">
                            <div className={errMsg.V_CONTRASENA !== "" ? ("input-group-text d-flex border border-danger") : ("input-group-text d-flex")}
                                style={{ background: "white" }}>
                                <FaKey />
                            </div>
                            <input
                                type={showPassword.pw ? "text" : "password"}
                                name='V_CONTRASENA'
                                value={usuario.V_CONTRASENA}
                                className={errMsg.V_CONTRASENA !== "" ? ("form-control is-invalid border border-danger") : ("form-control")}
                                placeholder="Contraseña"
                                onFocus={(e) => setTouched({ ...touched, [e.target.name]: true })}
                                onChange={(e) => setUsuario((prevUsuario) => ({ ...prevUsuario, [e.target.name]: e.target.value }))}
                                onBlur={(e) => setErrMsg({ ...errMsg, [e.target.name]: verificarContraseñaLogin(usuario.V_CONTRASENA) })} />
                            <div
                                className={errMsg.V_CONTRASENA !== "" ? ("input-group-text pwd-icon d-flex border border-danger") : ("input-group-text pwd-icon d-flex")}
                                onClick={() => setShowPassword({ ...showPassword, pw: !showPassword.pw })}>
                                {showPassword.pw ? <BiShow /> : <BiHide />}
                            </div>
                        </div>
                        {errMsg.V_CONTRASENA !== "" && (<small className="invalid-feedback d-block text-center">{errMsg.V_CONTRASENA}</small>)}
                    </div>

                    <p className='forgot-password text-center'>
                        <button
                            className='btn-link mb-3'
                            data-toggle='tooltip'
                            title="Haga clic aqui para recuperar su contraseña"
                        >¿OLVIDASTE TU CONTRASEÑA?</button>
                    </p>

                    <div className="d-block text-center m-auto">
                        <button
                            id="login"
                            className="btn btn-primary btn-form p-3"
                            onClick={(e) => loginUsuario(e)}
                            onMouseEnter={handleButtonMouseEnter}>
                            INGRESAR
                        </button>
                    </div>

                    <div className='mt-3'>
                        <p className='text-center'>
                            ¿Aún no estas registrado?
                            <button
                                className='btn-link'
                                onClick={registerLink}
                                data-toggle='tooltip'
                                title="Haga clic aqui para registrarte">
                                Regístrate
                            </button>
                        </p>

                    </div>

                </form>

            </div>

        </div>

    )
}
export default Login