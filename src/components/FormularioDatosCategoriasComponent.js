import React from 'react'
const FormularioDatosCategoriasComponent = (props) => {
    return (
        <form>

            <div className="mb-3 mt-3">
               
                <input type="text" className="mb-3 form-control me-2" placeholder="ID" aria-label="ID category" />
                <input type="text" className="mb-3 form-control" placeholder="Nombre" aria-label="Name" />
                <input className="mb-3 form-control" type="text" placeholder="Descripcion de Categoria" aria-label="default input example"></input>
                <input className="mb-3 form-control" type="text" placeholder="Estado" aria-label="default input example"></input>

             
            </div>

            <div className="text-center m-auto d-flex justify-content-center">

                {props.button1}

                {props.button2}

            </div>

            <div className='mt-3'></div>
        </form>
    )
}

export default FormularioDatosCategoriasComponent