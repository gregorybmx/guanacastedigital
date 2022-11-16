import React from 'react'
import { useNavigate } from "react-router-dom";

import FormularioComponent from '../components/FormularioDatosCategoriasComponent'



import logo from '../img/gd_logo.png'

const CategoryRegister = () => {


    const navigate = useNavigate();

    const loginLink = () => {
        navigate("/");
    }

    return (
   
        <div className='m-3'>
            <div className="wrapper">
                <div className="wrapper-content">

                    <div id='gdLogo'>
                        <img src={logo} className="d-block w-75 m-auto" alt='logotipo de Guanacaste Digital' />
                        <br></br>
                        <h2 className="text-center">Resgistro de Categoria</h2>
                    </div>

                    <div className='title-underline text-center mb-3'></div>
                    
                    <FormularioComponent 
                    button1 = {<button type="submit" className="btn btn-reg btn-primary me-5">Registrar</button>}
                    button2 = {<button type="button" className="btn btn-reg btn-danger" onClick={loginLink}>Cancelar</button>}/>

                </div >
            </div>
        </div >

    )
}

export default CategoryRegister
