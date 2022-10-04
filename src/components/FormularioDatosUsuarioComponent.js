import React from 'react'

const FormularioDatosUsuarioComponent = (props) => {
    return (
        <form>

        <div className="mb-3 mt-3">
            <div className="mb-3 d-flex justify-content-around">
                <input type="text" className="form-control me-2" placeholder="Nombre" aria-label="First name" />
                <input type="text" className="form-control" placeholder="Apellidos" aria-label="Last name" />
            </div>

            <div className="mb-3">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Correo Electrónico" />
            </div>

            <input className="mb-3 form-control" type="number" placeholder="Número de Telefono" aria-label="default input example"></input>

            <div className="mb-3  d-flex justify-content-around">
                <select className="form-select me-2" id="floatingSelectC" aria-label="FloatingLabel">
                    <option default value="Elija su cantón">Selecciona tu Cantón</option>
                    <option value="1">Liberia</option>
                    <option value="2">Cañas</option>
                    <option value="3">Bagaces</option>
                </select>

                <select className="form-select" id="floatingSelectD" aria-label="FloatingLabel">
                    <option default value="Elija su Distrito">Selecciona tu Distrito</option>
                    <option value="1">Liberia</option>
                    <option value="2">...</option>
                </select>
            </div>

            <div className="mb-3">
                <input type="text" className="form-control" id="inputAddress" placeholder="Ingrese su Direccion de Facturacion" />
            </div>

            <div className="mb-3">
                <input type="password" className="form-control" placeholder="Contraseña" />
            </div>

            <div className="mb-3">
                <input type="password" className="form-control" placeholder="Verifica tu Contraseña" />
            </div>
        </div>

        <div className="text-center m-auto d-flex justify-content-center">

            {props.button1}

            {props.button2}

        </div>

        <div className='mt-3'></div>
    </form>
    )
}

export default FormularioDatosUsuarioComponent   
