import React from "react"
import Button from '@mui/material/Button';
import PropTypes from "prop-types"
import "../css/cards.css"
import ModalComponent from './DinamicModalComponent'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

function CardComponent({ title, category, imageSource, text, textM, textM2 }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
      <div className="card-body text-light ">
        <h4 className="card-title">{title}</h4>
        <p className='card-text text-secondary '>
          {
            text ? text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        </p>
        <button onClick={handleOpen} className="btn btn-outline-secondary rounded-0 text-white rounded-1 bg-secondary" target="_blank">       Mostrar Información </button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="style" onclick={handleClose}>
            <img src={imageSource} className="card-img-top-2 mb-5"></img>
            <p className="modal-modal-title ms-2" variant="h6" component="h2">
              {
                textM ? textM : "Lorem Ipsum."
              }
            </p>
            <p className="modal-modal-description ms-2 mb-4" sx={{ mt: 2 }}>
              {
                textM2 ? textM2 : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              }
            </p>
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Cerrar"></button>
          </Box>          
        </Modal>

      </div>
    </div >
  )
}
CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  text: PropTypes.string.isRequired,
  textN: PropTypes.string.isRequired,
  textN2: PropTypes.string.isRequired,
}
export default CardComponent
