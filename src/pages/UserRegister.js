import React from 'react'
import { useDispatch } from 'react-redux';
import { agregarUsuario } from '../redux/slices/usuarioSlice';
import { useNavigate } from "react-router-dom";
import ModalComponent from '../components/ModalComponent';
import FormularioComponent from '../components/FormularioDatosUsuarioComponent'
import { alertSA } from '../components/SweetAlert';
import logo from '../img/gd_logo.png'

const UserRegister = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const homeLink = () => {
        navigate("/");
    }

    const loginLink = () => {
        navigate("/login");
    }


    function agregarUsuarios(e, usuario) {
        e.preventDefault();
        const now = new Date();
        now.setHours(now.getHours() - 6);
        const formattedDate = now.toISOString();
        const sha256 = require('js-sha256');


        const user = {
            V_ID: usuario.V_ID,
            V_CORREO: usuario.V_CORREO,
            V_NOMBRE_COMPLETO: usuario.V_NOMBRE,
            V_FECHA_INGRESO: formattedDate,
            V_CONTRASENA: sha256(usuario.V_CONTRASENA),
            V_TELEFONO: parseInt(usuario.V_TELEFONO)
        }

        dispatch(agregarUsuario(user)).then((response) => {
            if (response.payload === "Cliente registrado exitosamente.") {
                setTimeout(() => {
                    alertSA('success', 'Usuario Registrado Correctamente', response.payload)
                }, 2000);

                navigate("/");
            }

            else if (response.payload === "No se pudo insertar los datos: ORA-00001: unique constraint (GD.USUARIOS_PK) violated")
                alertSA('error', 'Error al registrar', "Este usuario ya se encuentra registrado")

            else if (response.payload === "No se pudo insertar los datos: ORA-00001: unique constraint (GD.USUARIOS_UK1) violated")
                alertSA('error', 'Error al registrar', "El correo ingresado ya se encuentra registrado")

            else
                alertSA('error', 'Error al registrar', response.payload + ". Contacte con el administrador del sistema a la brevedad posible.")
        });
    }

    return (

        <div className='m-3'>
            <div className="wrapper">
                <div className="wrapper-content">

                    <div id='gdLogo'>
                        <img src={logo} className="d-block w-50 m-auto mt-3" alt='logotipo de Guanacaste Digital' />
                    </div>

                    <h5 className='mt-4  text-center'>Registro de Usuarios</h5>

                    <div className='title-underline mt-1' />

                    <FormularioComponent
                        butonActionText="Registrar"
                        butonActionClass="btn btn-reg btn-primary me-5"
                        onClick={agregarUsuarios}
                        button2={<button type="button" className="btn btn-reg btn-danger" onClick={homeLink}>Cancelar</button>} />


                    <div className='d-flex justify-content-center text-center mt-5'>

                        <p className='d-inline font-weight-bold'>¿Ya tiene una cuenta?</p>
                        <p className='d-inline text-primary text-decoration-none font-weight-bold ms-2 link' onClick={loginLink}>Inicia Sesión</p>
                    </div>


                    <div className='mt-3'>
                        <div className='d-flex justify-content-center'>
                            <ModalComponent
                                classButton='btn btn-link '
                                textButton='TÉRMINOS Y CONDICIONES'
                                title='TÉRMINOS Y CONDICIONES'
                                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                        </div>
                    </div>
                </div >
            </div>
        </div >

    )
}

export default UserRegister