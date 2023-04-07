import { useDispatch } from 'react-redux';
import { actualizarUsuario } from '../../redux/slices/usuarioSlice';

export const useActualizarUsuarioAPI = (user) => {
    const dispatch = useDispatch();
    dispatch(actualizarUsuario(user));
}