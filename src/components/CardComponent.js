import React from "react"
import PropTypes from "prop-types"
import "../css/cards.css"
function CardComponent ({title, imageSource, text, url}) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
          <img src = {imageSource} className = "card-img-top"></img>
      </div>

      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className='card-text text-secondary'>
          {
            text ? text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        </p>
          <a href={url} className="btn btn-outline-secondary rounded-0" target = "_blank">
            Información del Producto
          </a>
      </div>
    </div>
  )
}
CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string.isRequired,
}
export default CardComponent