import React from 'react'

const DeliveryPartnersReports = () => {


    return (
        <div className='m-3'>
            <div className="wrapper2">
                <div className="wrapper-content2">

                    <div className='m-3 text-center'>
                        <h4>Reporte de Viajes del Socio Repartidor</h4>
                    </div>
                    <div className='title-underline text-center mb-3'></div>

                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Introduce la cedula del Socio Repartidor" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>

                    <div className='m-3'/>
                    <div className="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Cedula</th>
                                <th scope="col">Nombre del Repartidor</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Comercio o Servicio</th>
                                <th scope="col">Fecha de retiro</th>
                                <th scope="col">Fecha de llegada</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>5511448877</td>
                                <td>Kendall</td>
                                <td>Reyes Estrada</td>
                                <td>Activo</td>
                                <td>Krismar</td>
                                <td>12/04/2023 11:30am</td>
                                <td>12/04/2023 12:10pm</td>
                                <td><button type="button" class="btn btn-danger">Eliminar Reporte</button></td>
                            </tr>
                        </tbody>
                    </table>
                     </div>
                </div >
            </div>
        </div >
    )
}

export default DeliveryPartnersReports;