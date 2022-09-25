import React from 'react'

const userRegisterComponent = () => {
    return (
        
        <form className="row g-3">
            <h3>Registrate</h3>
            <div className="row g-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Nombre" aria-label="First name" />
                </div>

                <div className="col">
                    <input type="text" className="form-control" placeholder="Apellidos" aria-label="Last name" />
                </div>
            </div>

            <div className="mb-3">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Ingresa tu Correo Electronico" />
            </div>

            <input className="form-control" type="text" placeholder="Ingresa tu Numero de Telefono" aria-label="default input example"></input>

            <div className="form-floating">
                <select className="form-select" id="floatingSelectC" aria-label="FloatingLabel">
                    <option default value="Elegir canton">Selecciona tu Canton</option>
                    <option value="1">Liberia</option>
                    <option value="2">Cañas</option>
                    <option value="3">Bagaces</option>
                </select>
            </div>

            <div className="form-floating">
                <select className="form-select" id="floatingSelectD" aria-label="FloatingLabel">
                    <option default value="Elegir Distrito">Selecciona tu Distrito</option>
                    <option value="1">Liberia</option>
                    <option value="2">...</option>
                </select>
            </div>

            <div className="col-12">
                <input type="text" className="form-control" id="inputAddress" placeholder="Ingresa tu Direccion de Facturacion" />
            </div>

            <div className="mb-3">
                <input type="password" className="form-control" placeholder="Ingresa tu Contraseña" />
            </div>

            <div className="mb-3">
                <input type="password" className="form-control" placeholder="Verifica tu Contraseña" />
            </div>

            <button type="submit" className="btn btn-primary">Registrar</button>

            <button type="button" className="btn btn-primary">Cancelar</button>

        </form>
    )
  }
  
  export default userRegisterComponent
