import { useDispatch } from 'react-redux';
import {agregarImgProducto} from '../../redux/slices/imgProductosSlice'

export const useCrearImgProductoAPI = (img) => {
    const dispatch = useDispatch();
    dispatch(agregarImgProducto(img));
}