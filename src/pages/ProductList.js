import React from "react";
import useListaProductosAPI from "../hooks/productos/useListaProductosAPI";
import CargandoComponent from '../components/CargandoComponent';
import ModalComponent from "../components/ModalComponent";
import { FaClipboardList } from 'react-icons/fa';

const ProductList = () => {

    const [productosList, status] = useListaProductosAPI();

    return (
        <div className="m-3">
            {status !== "idle" ?
                (<div className="wrapper">
                    <div className="wrapper-content">

                        <div className="m-3 text-center">
                            <h4><FaClipboardList className="me-2" />Lista de Productos y Servicios</h4>
                        </div>

                        <div className='title-underline text-center mb-3' />

                        <form className="d-flex" role="search">
                            <input className="form-control me-2 text-center" type="search" placeholder="Buscar Producto o Servicio" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Código</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productosList.map((prod) => (
                                    <tr>
                                        <td>{prod.id}</td>
                                        <td>{prod.nombre}</td>
                                        <td>¢{prod.precio}</td>
                                        <td>{prod.estado}</td>
                                        <td>
                                            <button type="button" className="btn btn-primary">Modificar</button>
                                            <ModalComponent
                                                classButton='btn btn-outline-danger rounded-0 text-white rounded-1 bg-danger mt-4'
                                                textButton='Eliminar'
                                                title="Eliminar Producto"
                                                content='¿Realmente deseas eliminar el Producto?'
                                                buttonCloseText="Cancelar"
                                                buttonFunction={<button type="button" className="btn btn-danger">Eliminar</button>}
                                            />
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>)
                :
                (<div className={"container d-flex justify-content-center align-items-center h-100"}>
                    <div className="row">
                        <CargandoComponent />
                        <h3>CARGANDO PRODUCTOS</h3>
                    </div>
                </div>)}
        </div>
    );

};

export default ProductList; 