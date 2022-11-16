import React from 'react'

const SalesReportBPView = () => {
  
    return (
        <div className='m-3'>
            <div className="wrapper2">
                <div className="wrapper-content2">
    
                    <div className='m-3 text-center'>
                        <h4>Vista  de Reporte de Ventas</h4>
                    </div>
                    <div className='title-underline text-center mb-3'></div>
    
                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Digite el id del reporte" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
    
                    <div className='m-3'/>
    
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">ID Socio Comercial</th>
                                <th scope="col">ID producto</th>
                                <th scope="col">ID Cliente</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Descuento</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1298</td>
                                <td>34545</td>
                                <td>77845</td>
                                <td>17.000</td>
                                <td>N/A</td>
                                <td>11-12-2000</td>
                                <td><button type="button" class="btn btn-danger">Eliminar Reporte</button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>1234</td>
                                <td>34345</td>
                                <td>778565</td>
                                <td>200.000</td>
                                <td>N/A</td>
                                <td>11-12-2022</td>
                                <td><button type="button" class="btn btn-danger">Eliminar Reporte</button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>3548</td>
                                <td>3434</td>
                                <td>34285</td>
                                <td>30.000</td>
                                <td>N/A</td>
                                <td>21-09-2011</td>
                                <td><button type="button" class="btn btn-danger">Eliminar Reporte</button></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>1242</td>
                                <td>3535</td>
                                <td>7555</td>
                                <td>10.000</td>
                                <td>N/A</td>
                                <td>30-10-2007</td>
                                <td><button type="button" class="btn btn-danger">Eliminar Reporte</button></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>578</td>
                                <td>8635</td>
                                <td>095</td>
                                <td>1000</td>
                                <td>N/A</td>
                                <td>09-03-2022</td>
                                <td><button type="button" class="btn btn-danger">Eliminar Reporte</button></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>634</td>
                                <td>6535</td>
                                <td>75</td>
                                <td>39.000</td>
                                <td>N/A</td>
                                <td>30-10-2000</td>
                                <td><button type="button" class="btn btn-danger">Eliminar Reporte</button></td>
                            </tr>
                        </tbody>
                    </table>
    
                </div >
            </div>
        </div >
    )
  
}

export default SalesReportBPView