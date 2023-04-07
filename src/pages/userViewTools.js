import React from 'react'
import useListaUsuariosAPI from '../hooks/usuarios/useListaUsuariosAPI'
import CargandoComponent from '../components/CargandoComponent';

const UserViewTools = () => {

    const [usuarioList, status] = useListaUsuariosAPI();

    return (
        <div className='m-3'>

            {status !== "idle" ?
                (<div className="wrapper2">
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

                        <div className='m-3' />

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre Completo</th>
                                    <th scope="col">Correo Electronico</th>
                                    <th scope="col">Ultimo Loggeo</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarioList.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.nombre_completo}</td>
                                        <td>{user.correo}</td>
                                        <td>{user.ultimo_loggeo}</td>
                                        <td><button type="button" className="btn btn-danger">Eliminar Cliente</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div >
                </div>)
                :
                (<div className={"container d-flex justify-content-center align-items-center h-100"}>
                    <div className="row">
                        <CargandoComponent />
                        <h3>CARGANDO USUARIOS</h3>
                    </div>
                </div>)}
        </div >
    )
}

export default UserViewTools
