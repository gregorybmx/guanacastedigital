import React from 'react'
import { useNavigate } from "react-router-dom";
import ModalComponent from '../components/ModalComponent';
import FormularioComponent from '../components/FormularioDatosCRComponent'


import logo from '../img/gd_logo.png'

const DeliveryPartnersRegister = () => {

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
                    </div>

                    <div className='title-underline text-center mb-3'></div>

                    <div className="mb-3">
                        <label for="formFile" className="form-label center">Elige una Foto</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>

                    <FormularioComponent

                        button1={<button type="submit" className="btn btn-reg btn-primary me-5">Registrar</button>}
                        button2={<button type="button" className="btn btn-reg btn-danger" onClick={loginLink}>Cancelar</button>} />


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

export default DeliveryPartnersRegister