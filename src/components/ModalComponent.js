import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Backdrop } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#99ddea',
    border: '2px solid #000',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
    gap: '32px'
};

const img = {
    height: '100%',
    padding: '20px -5px -2px -5px',
    
}

const ModalComponent = (props) => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button className={props.classButton} onClick={handleOpen}>{props.textButton}</Button>

            <Modal
                open={open}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    sx: {BackgroundColor: 'rgba(0, 0, 0, 10)'}
                }}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                <Box sx={style} >
                    <button type="button" className="btn-close float-end mb-2" onClick={handleClose} aria-label="Cerrar"></button>
                    {props.img}
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {props.title}
                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
                        {props.content}
                    </Typography>
                    
                    {props.buttonFunction}

                    <button type="button" className="btn btn-secondary float-end mb-2 me-2" onClick={handleClose} aria-label="Cerrar">{props.buttonCloseText}</button>
                    
                </Box>

            </Modal>

        </div>
    )
}

export default ModalComponent