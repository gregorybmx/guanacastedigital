import { useDispatch } from 'react-redux';
import {agregarProducto} from '../../redux/slices/productoSlice'

export const useCrearProductoAPI = (producto) => {
    const dispatch = useDispatch();
    dispatch(agregarProducto(producto)).then((respuesta)=>{
        return respuesta
    })
}

export default useCrearProductoAPI