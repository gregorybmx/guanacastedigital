import axios from 'axios';
import {useState, useEffect} from 'react'

const ProductosEliminar = (id) => {

    const [respuesta, setRespuesta] = useState([]);


    useEffect(() => {
        axios.delete('https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/gd/prod/proc_delete_product/'+id).them(
            (response) => {
                setRespuesta(response.data.resultado)
            });
        }, []);
    

    return [respuesta]
}

export default ProductosEliminar