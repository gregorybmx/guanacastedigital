import React, {useState} from "react";
import { IoBagAdd } from 'react-icons/io5';

const ProductRegister = () => {

    const [type, setType] = useState(true);

    return (
        <div className="m-3">
            <div className="wrapper">
                <div className="wrapper-content">
                    <div className="m-3 text-center">
                        <h4><IoBagAdd /> Agregar Productos y Servicios</h4>
                    </div>
                    <div className='title-underline text-center mb-3'></div>
                    <form>
                        <div className="mb-3 text-center">
                            <label for="formFile" className="form-label">Seleccione el tipo:</label>
                            <div className="mb-3 d-flex justify-content-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="tipo" onChange={()=>setType(true)} id="productRadio" checked/>
                                    <label className="form-check-label" for="productRadio">
                                        Producto
                                    </label>
                                </div>
                                <div className="form-check ms-3">
                                    <input className="form-check-input" type="radio" name="tipo" onChange={()=>setType(false)} id="serviceRadio"/>
                                    <label className="form-check-label" for="serviceRadio">
                                        Servicio
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className='form-control d-inline-flex text-field text-center'
                                placeholder= {type? 'Codigo del Producto':'Codigo del Servicio'}
                                data-toggle='tooltip'
                                tooltiptext="Ingrese el codigo del Producto"
                            />
                        </div>

                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className='form-control d-inline-flex text-field text-center'
                                placeholder='Descripción del Producto'
                                data-toggle='tooltip'
                                tooltiptext="Ingrese la descripcíon del Producto"
                            />
                        </div>

                        <div className="form-group  mb-3">
                            <label for="formFile d-inline-flex text-field" className="form-label">Seleccione una imagen para su producto</label>
                            <input className="form-control d-inline-flex text-field" type="file" id="formFile" />
                        </div>

                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className='form-control d-inline-flex text-field text-center'
                                placeholder='Precio del Producto'
                                data-toggle='tooltip'
                                tooltiptext="Ingrese el precio del Producto"
                            />
                        </div>

                        <div className="mb-3 text-center">
                            <label for="formFile" className="form-label">Disponibilidad</label>
                            <div className="mb-3 d-flex justify-content-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="disponibilidad" id="dispActiva" checked />
                                    <label className="form-check-label" for="productRadio">
                                        Activa
                                    </label>
                                </div>
                                <div className="form-check ms-3">
                                    <input className="form-check-input" type="radio" name="disponibilidad" id="serviceRadio" />
                                    <label className="form-check-label" for="serviceRadio">
                                        Inactiva
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="d-block text-center m-auto">
                            <button
                                type="submit"
                                className="btn btn-primary btn-form mb-3">
                                AGREGAR
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductRegister;
