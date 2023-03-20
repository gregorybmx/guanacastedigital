import React from 'react'
import CardComponent from '../components/CardComponent'
import ProductList from '../api/Productos/ProductosListar'

const Home = () => {

    const [products] = ProductList();

    return (
        <div className={"container d-flex justify-content-center align-items-center h-100"}>
            <div className="row">
                {
                    products.map(prod => (
                        <div className="col-md-4" key={prod.id}>
                            <CardComponent title={prod.nombre} category={prod.id_categoria} imageSource={prod.imaURL} text={prod.descripcion} textM={prod.nombre} textM2={prod.descripcion} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home