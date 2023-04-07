import React from 'react'

const CargandoComponent = () => {
    return (
        <div className=" d-flex justify-content-center align-items-center w-100 h-100">
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Cargando...</span>
            </div>
        </div>
    )
}

export default CargandoComponent