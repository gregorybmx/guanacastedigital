import React from 'react'

const CategoryView = () => {
  return (
    <div className='m-3'>
        <div className="wrapper2">
            <div className="wrapper-content2">

                <div className='m-3 text-center'>
                    <h4>Vista  de Categorias</h4>
                </div>
                <div className='title-underline text-center mb-3'></div>

                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Digite el id de la categoria" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>

                <div className='m-3'/>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Comida</td>
                            <td>Restaurate de comidas rapidas</td>
                            <td>Activo</td>
                            <td><button type="button" class="btn btn-danger">Eliminar Categoria</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Vehiculos</td>
                            <td>Repuestos para vehiculos</td>
                            <td>Activo</td>
                            <td><button type="button" class="btn btn-danger">Eliminar Categoria</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Deporte</td>
                            <td>Implementos para hacer deporte</td>
                            <td>Activo</td>
                            <td><button type="button" class="btn btn-danger">Eliminar Categoria</button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Electromesticos</td>
                            <td>Servicio de reparacion de electrodomesticos</td>
                            <td>Activo</td>
                            <td><button type="button" class="btn btn-danger">Eliminar Categoria</button></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button type="button" class="btn btn-danger">Eliminar Categoria</button></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button type="button" class="btn btn-danger">Eliminar Categoria</button></td>
                        </tr>
                    </tbody>
                </table>

            </div >
        </div>
    </div >
)
}

export default CategoryView