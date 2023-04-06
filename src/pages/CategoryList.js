import React from 'react';
import {BiCategoryAlt} from 'react-icons/bi'

const CategoryList = () => {

    return (

        <div className="m-3">
            <div className="wrapper">
                <div className="wrapper-content">
                    <div className="m-3 text-center">
                        <h4><BiCategoryAlt className="me-2" />Lista de Categorias</h4>
                    </div>

                    <div className='title-underline text-center mb-3' />

                    <form className="d-flex" role="search">
                        <input className="form-control me-2 text-center" type="search" placeholder="Buscar Categoria" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    <div className="table-responsive">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">Código</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10109</td>
                                <td>Ferreteria</td>
                                <td>Herramientas</td>
                                <td>Activo</td>
                                <td>
                                    <button type="button" className="btn btn-primary">Modificar</button>
                                    <button type="button" className="btn btn-danger ms-2">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default CategoryList;