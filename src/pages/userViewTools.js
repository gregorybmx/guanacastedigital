import React from 'react'

const UserViewTools = () => {


    return (
        <div className='m-3'>
            <div className="wrapper2">
                <div className="wrapper-content2">

                    <div className='m-3 text-center'>
                        <h4>Visualizar y Eliminar Clientes</h4>
                    </div>
                    <div className='title-underline text-center mb-3'></div>

                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Introduce el nombre del cliente" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>

                    <div className='m-3'/>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Correo Electronico</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tony</td>
                                <td>Rugama Gómez</td>
                                <td>tony@gmail.com</td>
                                <td><button type="button" class="btn btn-danger">Eliminar Cliente</button></td>
                            </tr>
                        </tbody>
                    </table>

                </div >
            </div>
        </div >
    )
}

export default UserViewTools

