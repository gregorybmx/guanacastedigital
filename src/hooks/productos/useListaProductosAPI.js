import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerProducto } from "../../redux/slices/productoSlice";

export const useListaProductosAPI = () => {
    const dispatch = useDispatch();
    const { productoList, status } = useSelector(state => state.producto);



    useEffect(() => {
        const obtenerProductoAsync = () => {
            setTimeout(() => {
                dispatch(obtenerProducto());
            }, 2000);
        }
        obtenerProductoAsync();
    }, [dispatch])

    return [productoList, status];
}

export default useListaProductosAPI;