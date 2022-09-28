import React from 'react'

const DinamicModalComponent = (props) => {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button type="button" className={props.class} data-bs-toggle="modal" data-bs-target="#dinamicModal">
        {props.button}
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="dinamicModal" aria-labelledby="dinamicModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title m-auto" id="dinamicModalLabel">{props.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              {props.content}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DinamicModalComponent