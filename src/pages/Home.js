import React from 'react';
import CardComponent from '../components/CardComponent';
import useListaProductosAPI from '../hooks/productos/useListaProductosAPI';
import CargandoComponent from '../components/CargandoComponent';

const Home = () => {

    const [productoList, status] = useListaProductosAPI();

    return (
        <div className={"container d-flex justify-content-center align-items-center h-100"}>
            <div className="row">
                {status !== "idle" ? (
                    productoList.map(prod => (
                        <div className="col-md-4" key={prod.id}>
                            <CardComponent title={prod.nombre} category={prod.id_categoria} imageSource={prod.imaURL} text={prod.descripcion} textM={prod.nombre} textM2={prod.descripcion} />
                        </div>
                    ))
                )
                    :
                    (<div><CargandoComponent />
                        <h3>CARGANDO PRODUCTOS ....</h3>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Home