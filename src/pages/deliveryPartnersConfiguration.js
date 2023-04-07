import React from 'react'
import FormularioComponent from '../components/FormularioDatosCRComponent'
import { RiUserSettingsLine } from 'react-icons/ri'


const DeliveryPartnersConfiguration = () => {
    return (

        <div className='m-3'>
            <div className="wrapper">
                <div className="wrapper-content">

                    <div className='m-3 text-center'>
                        <h4> <RiUserSettingsLine /> Configuración de Socio Repartidor</h4>
                    </div>
                    <div className='title-underline text-center mb-3'></div>

                    <div className="mb-3">
                        <label for="formFile" className="form-label center">Elige una nueva Foto</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>

                    <FormularioComponent
                        button1={<button type="submit" className="btn btn-reg btn-primary me-5">Actualizar</button>}
                        button2={<button type="button" className="btn btn-reg btn-danger">Cancelar</button>} />
                </div >
            </div>
        </div >
    )
}

export default DeliveryPartnersConfiguration