import React, { useEffect, useState } from 'react'
import { BiHide, BiShow } from 'react-icons/bi';
import { verificarId, verificarNombreCompleto, verificarCorreo, verificarTelefono, verificarContraseñaRobusta, verificarContraseñas } from '../functions/verificaciones';
import { alertSA } from './SweetAlert';


const FormularioDatosUsuarioComponent = (props) => {
    const [error, setError] = useState(true)

    const [showPassword, setShowPassword] = useState({ pw: false, confirm: false });

    const [touched, setTouched] = useState({ V_ID: false,
        V_NOMBRE: false, V_CORREO: false, V_TELEFONO: false,
        V_CONTRASENA: false, V_VERIFICACION_CONTRASENA: false
    })

    const [errMsg, setErrMsg] = useState({  V_ID: "",
        V_NOMBRE: "", V_CORREO: "", V_TELEFONO: "",
        V_CONTRASENA: "", V_VERIFICACION_CONTRASENA: ""
    })

    const [usuario, setUsuario] = useState({ V_ID: "",
        V_NOMBRE: "", V_CORREO: "", V_TELEFONO: "",
        V_CONTRASENA: "", V_VERIFICACION_CONTRASENA: ""
    })

    function isTouched() {
        for (let key in touched) {
            if (!touched[key]) {
                setErrMsg((prevErrMsg) => ({ ...prevErrMsg, [key]: "No debe dejar este espacio vacio" }))
            }
        }
    }

    function agregarUsuario(e) {
        e.preventDefault();
        isTouched();

        if (!error) {
            props.onClick(e, usuario)
        }

        else
            alertSA('error', 'Error', "Existen errores en el formulario, verifique los espacios marcados e intente de nuevo")
    }

    const handleButtonMouseEnter = (event) => {
        const btn = document.getElementById("button1");
        isTouched();
        btn.focus();
    };

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


    return (
        <form>

            <div className="mb-3 mt-3">

                <div className='mb-3'>
                    <div className="d-flex justify-content-around">
                        <input
                            type="text"
                            name='V_ID'
                            value={usuario.V_ID}
                            className={errMsg.V_ID !== "" ? ("form-control is-invalid border border-danger") : ("form-control")}
                            placeholder="Identificación"
                            onFocus={(e) => setTouched({ ...touched, [e.target.name]: true })}
                            onChange={(e) => setUsuario((prevUsuario) => ({ ...prevUsuario, [e.target.name]: e.target.value }))}
                            onBlur={(e) => setErrMsg({ ...errMsg, [e.target.name]: verificarId(usuario.V_ID) })} />
                    </div>
                    {errMsg.V_ID !== "" && (<small className="invalid-feedback d-block text-center">{errMsg.V_ID}</small>)}

                </div>

                <div className='mb-3'>
                    <div className="d-flex justify-content-around">
                        <input
                            type="text"
                            name='V_NOMBRE'
                            value={usuario.V_NOMBRE}
                            className={errMsg.V_NOMBRE !== "" ? ("form-control is-invalid border border-danger") : ("form-control")}
                            placeholder="Nombre Completo"
                            aria-label="name"
                            onFocus={(e) => setTouched({ ...touched, [e.target.name]: true })}
                            onChange={(e) => setUsuario((prevUsuario) => ({ ...prevUsuario, [e.target.name]: e.target.value }))}
                            onBlur={(e) => setErrMsg({ ...errMsg, [e.target.name]: verificarNombreCompleto(usuario.V_NOMBRE) })} />
                    </div>
                    {errMsg.V_NOMBRE !== "" && (<small className="invalid-feedback d-block text-center">{errMsg.V_NOMBRE}</small>)}

                </div>

                <div className="mb-3">

                    <input
                        type="email"
                        name='V_CORREO'
                        value={usuario.V_CORREO}
                        className={errMsg.V_CORREO !== "" ? ("form-control is-invalid border border-danger") : ("form-control")}
                        placeholder="Correo Electrónico"
                        onFocus={(e) => setTouched({ ...touched, [e.target.name]: true })}
                        onChange={(e) => setUsuario((prevUsuario) => ({ ...prevUsuario, [e.target.name]: e.target.value }))}
                        onBlur={(e) => setErrMsg({ ...errMsg, [e.target.name]: verificarCorreo(usuario.V_CORREO) })} />
                    {errMsg.V_CORREO !== "" && (<small className="invalid-feedback d-block text-center">{errMsg.V_CORREO}</small>)}

                </div>
                <div className="mb-3">
                    <input
                        type="phone"
                        name='V_TELEFONO'
                        value={usuario.V_TELEFONO}
                        className={errMsg.V_TELEFONO !== "" ? ("form-control is-invalid border border-danger") : ("form-control")}
                        placeholder="Número de Telefono"
                        onFocus={(e) => setTouched({ ...touched, [e.target.name]: true })}
                        onChange={(e) => setUsuario((prevUsuario) => ({ ...prevUsuario, [e.target.name]: e.target.value }))}
                        onBlur={(e) => setErrMsg({ ...errMsg, [e.target.name]: verificarTelefono(usuario.V_TELEFONO) })} />
                    {errMsg.V_TELEFONO !== "" && (<small className="invalid-feedback d-block text-center">{errMsg.V_TELEFONO}</small>)}

                </div>

                <div className="mb-3">
                    <div className="input-group">
                        <input
                            type={showPassword.pw ? "text" : "password"}
                            name='V_CONTRASENA'
                            value={usuario.V_CONTRASENA}
                            className={errMsg.V_CONTRASENA !== "" ? ("form-control is-invalid border border-danger") : ("form-control")}
                            placeholder="Contraseña"
                            onFocus={(e) => setTouched({ ...touched, [e.target.name]: true })}
                            onChange={(e) => setUsuario((prevUsuario) => ({ ...prevUsuario, [e.target.name]: e.target.value }))}
                            onBlur={(e) => setErrMsg({ ...errMsg, [e.target.name]: verificarContraseñaRobusta(usuario.V_CONTRASENA) })} />
                        <div
                            className="input-group-text pwd-icon d-flex"
                            onClick={() => setShowPassword({ ...showPassword, pw: !showPassword.pw })}>
                            {showPassword.pw ? <BiShow /> : <BiHide />}
                        </div>
                        {errMsg.V_CONTRASENA !== "" && (<small className="invalid-feedback d-block text-center">{errMsg.V_CONTRASENA}</small>)}
                    </div>
                    <div className='mb-3'>
                        <div className="input-group mt-3">
                            <input
                                type={showPassword.confirm ? "text" : "password"}
                                name='V_VERIFICACION_CONTRASENA'
                                value={usuario.V_VERIFICACION_CONTRASENA}
                                className={errMsg.V_VERIFICACION_CONTRASENA !== "" ? ("form-control is-invalid border border-danger") : ("form-control")}
                                placeholder="Verifica tu Contraseña"
                                onFocus={(e) => setTouched({ ...touched, [e.target.name]: true })}
                                onChange={(e) => setUsuario((prevUsuario) => ({ ...prevUsuario, [e.target.name]: e.target.value }))}
                                onBlur={(e) => setErrMsg({ ...errMsg, [e.target.name]: verificarContraseñas(usuario.V_CONTRASENA, usuario.V_VERIFICACION_CONTRASENA) })} />
                            <div className="input-group-text pwd-icon d-flex" onClick={() => setShowPassword({ ...showPassword, confirm: !showPassword.confirm })}>
                                {showPassword.confirm ? <BiShow /> : <BiHide />}
                            </div>
                        </div>
                        {errMsg.V_VERIFICACION_CONTRASENA !== "" && (<small className="invalid-feedback d-block text-center">{errMsg.V_VERIFICACION_CONTRASENA}</small>)}
                    </div>
                </div>
            </div>

            <div className="text-center m-auto d-flex justify-content-center">

                <button id="button1" className={props.butonActionClass} onClick={(e) => agregarUsuario(e)} onMouseEnter={handleButtonMouseEnter}>{props.butonActionText}</button>

                {props.button2}

            </div>

            <div className='mt-3'></div>
        </form>
    )
}

export default FormularioDatosUsuarioComponent   
