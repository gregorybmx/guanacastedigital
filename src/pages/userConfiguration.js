import React from 'react'
import Favoritos from '../testData/favoritos'
import FormularioComponent from '../components/FormularioDatosUsuarioComponent'
import { RiUserSettingsLine } from 'react-icons/ri'
import { FaUserEdit } from 'react-icons/fa'
import { MdArticle, MdFavorite } from 'react-icons/md'




const UserConfiguration = () => {
    return (

        <div className='m-3'>
            <div className="user-wrapper">
                <div className="user-wrapper-content">

                    <div className='m-3 text-center'>
                        <h4> <RiUserSettingsLine /> Configuración de Usuario</h4>
                    </div>
                    <div className='title-underline text-center mb-3'></div>

                    <div class="accordion accordion-flush" id="acordionUserConfiguration">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <h4><FaUserEdit className='me-2' /> Actualiza tus Datos</h4>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#acordionUserConfiguration">
                                <div class="accordion-body">

                                    <FormularioComponent
                                        button1={<button type="submit" className="btn btn-reg btn-primary me-5">Actualizar</button>}
                                        button2={<button type="button" className="btn btn-reg btn-danger">Cancelar</button>} />

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <h4> <MdArticle className='me-2' /> Historial de Pedidos</h4>
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#acordionUserConfiguration">
                                <div class="accordion-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Numero de Pedido</th>
                                                <th scope="col">Fecha del Pedido</th>
                                                <th scope="col">Estado</th>
                                                <th scope="col">Monto</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>27/9/2022</td>
                                                <td>Completado</td>
                                                <td>75000</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>27/9/2022</td>
                                                <td>Completado</td>
                                                <td>45000</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>27/9/2022</td>
                                                <td>Rechazado</td>
                                                <td>20000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <h4><MdFavorite className='me-2' /> Productos Favoritos</h4>
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#acordionUserConfiguration">
                                <div class="accordion-body">
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

