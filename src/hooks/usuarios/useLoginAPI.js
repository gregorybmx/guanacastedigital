import { useDispatch } from 'react-redux';
import { agregarUsuario } from '../../redux/slices/usuarioSlice';
import { actualizarUsuario } from '../../redux/slices/usuarioSlice';

export const useLoginAPI = (user) => {

    const dispatch = useDispatch();
    const respuesta = dispatch(agregarUsuario(user));

    if(respuesta !== 'Cliente registrado exitosamente.')
    {
        dispatch(actualizarUsuario(user));
    }

    //falta mostrar error
}