import { useDispatch } from 'react-redux';
import { agregarUsuario } from '../../redux/slices/usuarioSlice';
import { actualizarUsuario } from '../../redux/slices/usuarioSlice';

export const useLoginAPI = (user) => {

    const dispatch = useDispatch();
    dispatch(agregarUsuario(user)).then((respuesta) => {
        if(respuesta.payload !== 'Cliente registrado exitosamente.')
        {
            dispatch(actualizarUsuario(user));
        }
    
    });    //falta mostrar error
}