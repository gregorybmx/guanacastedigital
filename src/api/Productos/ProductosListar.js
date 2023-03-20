import { useState, useEffect } from 'react'
import axios from 'axios'

const Productos = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/gd/prod/model_products").then((response) => {
            setProducts(response.data.products)
        })
    }, []);

    return [products]
}

export default Productos