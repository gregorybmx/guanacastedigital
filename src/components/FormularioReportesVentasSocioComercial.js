import React from 'react'

const FormularioReportesVentasSocioComercial = (props) => {
  return (

        <form>

            <div className="mb-3 mt-3">
               
                <input type="text" className="mb-3 form-control me-2" placeholder="ID" aria-label="ID " />
                <input type="text" className="mb-3 form-control" placeholder="Id Socio Comercial" aria-label="IdSocioComercial" />
                <input className="mb-3 form-control" type="text" placeholder="Id Producto" aria-label="IdProducto"></input>
                <input className="mb-3 form-control" type="text" placeholder="Precio" aria-label="precio"></input>
                <input className="mb-3 form-control" type="text" placeholder="Id Socio Cliente" aria-label="IdSocioCliente"></input>
                <input className="mb-3 form-control" type="date" placeholder="Fecha" aria-label="date"></input>
                <input className="mb-3 form-control" type="text" placeholder="descuento" aria-label="descuento"></input>

             
            </div>

            <div className="text-center m-auto d-flex justify-content-center">

                {props.button1}

                {props.button2}

            </div>

            <div className='mt-3'></div>
        </form>
    )
}
export default FormularioReportesVentasSocioComercial