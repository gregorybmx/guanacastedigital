import React from 'react'

const DeliveryPartnersViewTools = () => {


    return (
        <div className='m-3'>
            <div className="wrapper2">
                <div className="wrapper-content2">

                    <div className='m-3 text-center'>
                        <h4>Visualizar y Eliminar Socios Repartidores</h4>
                    </div>
                    <div className='title-underline text-center mb-3'></div>

                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Introduce la cedula del Socio Repartidor" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>

                    <div className='m-3' />

                    <table className="table m-3">
                        <thead>
                            <tr>
                                <th scope="col">Cedula</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Correo Electronico</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>5511448877</td>
                                <td>Tony</td>
                                <td>Rugama Gómez</td>
                                <td>tony@gmail.com</td>
                                <td><button type="button" className="btn btn-danger">Eliminar Socio Repartidor</button></td>
                            </tr>
                        </tbody>
                    </table>

                </div >
            </div>
        </div >
    )
}

export default DeliveryPartnersViewTools