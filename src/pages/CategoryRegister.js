import React from "react";
import {AiOutlineAppstoreAdd} from "react-icons/ai"

const CategoryRegister = () => {

    return (
        <div className="m-3">
            <div className="wrapper">
                <div className="wrapper-content">
                    <div className="m-3 text-center">
                        <h4> <AiOutlineAppstoreAdd/> Agregar Categorias</h4>
                    </div>
                    <div className='title-underline text-center mb-3'></div>
                    <form>
                        <div className="form-control mb-3">
                            <input
                                type="text"
                                className='form-control d-inline-flex text-field text-center'
                                placeholder='Código de categoria'
                                data-toggle='tooltip'
                                tooltiptext="Ingrese el código de la categoria"
                            />
                        </div>

                        <div className="form-control mb-3">
                            <input
                                type="text"
                                className='form-control d-inline-flex text-field text-center'
                                placeholder='Nombre de la categoria'
                                data-toggle='tooltip'
                                tooltiptext="Ingrese el nombre de la categoria"
                            />
                        </div>

                        <div className="form-control mb-3">
                            <input
                                type="text"
                                className='form-control d-inline-flex text-field text-center'
                                placeholder='Descripción de la categoria'
                                data-toggle='tooltip'
                                tooltiptext="Ingrese la descripcíon de la categoria"
                            />
                        </div>

                        <div className="mb-3 text-center">
                            <label for="formFile" class="form-label">Disponibilidad</label>
                            <div className="mb-3 d-flex justify-content-center">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="disponibilidad" id="dispActiva" checked />
                                    <label class="form-check-label" for="productRadio">
                                        Activa
                                    </label>
                                </div>
                                <div className="form-check ms-3">
                                    <input class="form-check-input" type="radio" name="disponibilidad" id="serviceRadio" />
                                    <label class="form-check-label" for="serviceRadio">
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

export default CategoryRegister;
