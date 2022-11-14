import React from 'react'
import Favoritos from '../testData/favoritos'
import FormularioComponent from '../components/FormularioDatosUsuarioComponent'
import TableComponent from '../testData/historialPedido'
import { RiUserSettingsLine } from 'react-icons/ri'
import { FaUserEdit } from 'react-icons/fa'
import { MdArticle, MdFavorite } from 'react-icons/md'


const UserConfiguration = () => {

    return (

        <div className='m-3'>
            <div className="wrapper">
                <div className="wrapper-content">

                    <div className='m-3 text-center'>
                        <h4> <RiUserSettingsLine /> Configuración de Usuario</h4>
                    </div>
                    <div className='title-underline text-center mb-3'></div>

                    <div className="accordion accordion-flush mt-3 mb-3 " id="acordionUserConfiguration">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed text-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <h4><FaUserEdit className='me-2' /> Actualiza tus Datos</h4>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#acordionUserConfiguration">
                                <div className="accordion-body">

                                    <FormularioComponent
                                        button1={<button type="submit" className="btn btn-reg btn-primary me-5">Actualizar</button>}
                                        button2={<button type="button" className="btn btn-reg btn-danger">Cancelar</button>} />

                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed text-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <h4> <MdArticle className='me-2' /> Historial de Pedidos</h4>
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#acordionUserConfiguration">
                                <div className="accordion-body">
                                    <TableComponent/>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed text-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <h4><MdFavorite className='me-2' /> Productos Favoritos</h4>
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#acordionUserConfiguration">
                                <div className="accordion-body">
                                    <Favoritos />
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            </div>
        </div >
    )
}

export default UserConfiguration