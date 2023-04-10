import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerCategoria } from "../../redux/slices/categoriaSlice";

export const useListaCategoriasAPI = () => {
    const dispatch = useDispatch();
    const { categoriaList, status } = useSelector(state => state.categoria);

    useEffect(() => {
        const obtenerCategoriaAsync = () => {
            setTimeout(() => {
                dispatch(obtenerCategoria());
            }, 2000);
        }

        obtenerCategoriaAsync();
    }, [dispatch])

    return [categoriaList, status];
}

export default useListaCategoriasAPI;