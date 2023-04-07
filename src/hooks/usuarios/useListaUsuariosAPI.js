import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {obtenerUsuario} from "../../redux/slices/usuarioSlice"

export const useListaUsuariosAPI = () => {
    const dispatch = useDispatch();
    const { usuarioList, status } = useSelector(state => state.usuario);

    useEffect(() => {
        const obtenerUsuariosAsync = () => {
            setTimeout(() => {
                dispatch(obtenerUsuario());
            }, 2000);
        }
        obtenerUsuariosAsync();
    }, [dispatch])

    return [usuarioList, status];
}

export default useListaUsuariosAPI;