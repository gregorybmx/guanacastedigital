import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerProveedores } from "../../redux/slices/proveedorSlice";

export const useListaProveedoresAPI = () => {
    const dispatch = useDispatch();
    const { proveedorList, status } = useSelector(state => state.proveedor);

    useEffect(() => {

        const obtenerProveedoresAsync = () => {
            setTimeout(() => {
                dispatch(obtenerProveedores());
            }, 2000);
        }
        obtenerProveedoresAsync();
    }, [dispatch])

    return [proveedorList, status];
}

export default useListaProveedoresAPI;