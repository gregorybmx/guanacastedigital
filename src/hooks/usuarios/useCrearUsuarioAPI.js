import { useDispatch } from 'react-redux';
import { agregarUsuario } from '../../redux/slices/usuarioSlice';

export const useCrearUsuarioAPI = (user) => {
    const dispatch = useDispatch();
    dispatch(agregarUsuario(user));
}