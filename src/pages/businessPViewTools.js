import React from 'react'

const BusinessPartnersViewTools = () => {


    return (
        <div className='m-3'>
            <div className="wrapper2">
                <div className="wrapper-content2">

                    <div className='m-3 text-center'>
                        <h4>Visualizar y Eliminar Socios Comerciantes</h4>
                    </div>
                    <div className='title-underline text-center mb-3'></div>

                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Introduce la cedula del Socio Comerciante" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>

                    <div className='m-3'/>
<<<<<<< HEAD
                    <div className="table-responsive">
                    <table class="table">
=======

                    <table className="table">
>>>>>>> greivin
                        <thead>
                            <tr>
                                <th scope="col" className="col-2 col-md-1">Cedula</th>
                                <th scope="col" className="col-4 col-md-3">Nombre</th>
                                <th scope="col" className="col-12 col-md-12">Apellidos</th>
                                <th scope="col" className="col-2 col-md-2">Correo Electronico</th>
                                <th scope="col" className="col-6 col-md-6">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>5511448877</td>
                                <td>Tony</td>
                                <td>Rugama Gómez</td>
                                <td>tony@gmail.com</td>
                                <td><button type="button" className="btn btn-danger">Eliminar Socio Comerciante</button></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div >
            </div>
        </div >
    )
}

export default BusinessPartnersViewTools

