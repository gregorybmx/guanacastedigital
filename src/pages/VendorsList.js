import React from 'react'
import useListaProveedoresAPI from '../hooks/proveedores/useListaProveedoresAPI';
import CargandoComponent from '../components/CargandoComponent';

const VendorsList = () => {

    const [proveedorList, status] = useListaProveedoresAPI();

    return (
        <div className='m-3'>

            {status !== "idle" ?
                (<div className="wrapper2">
                    <div className="wrapper-content2">

                        <div className='m-3 text-center'>
                            <h4>Lista de Proveedores</h4>
                        </div>
                        <div className='title-underline text-center mb-3'></div>

                        <div className="container-fluid">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Introduce el nombre del cliente" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                        </div>
                        <div className="table-responsive">
                            <table className="table w-100">
                                <thead>
                                    <tr>
                                        <th scope="col">Nombre Completo</th>
                                        <th scope="col">Tipo Identificación</th>
                                        <th scope="col">N° Identificación</th>
                                        <th scope="col">N° Telefono</th>
                                        <th scope="col">Correo Electrónico</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {proveedorList.map((prov) => (
                                        <tr key={prov.id}>
                                            <td>{prov.nombre}</td>
                                            <td>{prov.tipo_identificacion}</td>
                                            <td>{prov.identificacion}</td>
                                            <td>{prov.telefono}</td>
                                            <td>{prov.correo}</td>
                                            <td><button type="button" className="btn btn-danger">Eliminar</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div >
                </div>)
                :
                (<div className={"container d-flex justify-content-center align-items-center h-100"}>
                    <div className="row">
                        <CargandoComponent />
                        <h3>CARGANDO PROVEEDORES</h3>
                    </div>
                </div>)}
        </div >
    )
}

export default VendorsList