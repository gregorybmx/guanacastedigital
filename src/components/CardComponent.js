import React from "react"
import PropTypes from "prop-types"
import { BsFillSuitHeartFill } from "react-icons/bs";
import "../css/cards.css"
import ModalComponent from './ModalComponent'


function CardComponent({ title, category, imageSource, text, textM, textM2 }) {

  return (

    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <p className="categoria">
        {
          category ? category : "Lorem Ipsum"
        }
      </p>
      <div className="overflow">
        <img src={imageSource} className="card-img-top" alt='IMG CARD'></img>
      </div>
      <div className="card-body text-light  ">
        <h4 className="card-title">{title}</h4>
        <p className='card-text text-secondary '>
          {
            text ? text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
          }
        </p>

        <ModalComponent
        classButton='btn btn-outline-secondary rounded-0 text-white rounded-1 bg-secondary mt-4'
        textButton = 'Mostrar Información'
        img = {<img src={imageSource} className="card-img-top-2 mb-5 w-100" alt='Imagen Card'></img>}
        title = {textM ? textM : "Lorem Ipsum."}
        content = {textM2 ? textM2 : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}
        buttonCloseText = "Cerrar"
        buttonFunction = <button className='btn btn-danger  border-0 float-end'><BsFillSuitHeartFill /></button>
        >
        </ModalComponent>
      </div>

    </div >


  )
}
CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  text: PropTypes.string.isRequired,
  textM: PropTypes.string.isRequired,
  textM2: PropTypes.string.isRequired,
}
export default CardComponent
