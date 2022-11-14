import React from "react";
import {FaClipboardList} from 'react-icons/fa';

const ProductList = () => {

    return (
        <div className="m-3">
            <div className="wrapper">
                <div className="wrapper-content">
                    <div className="m-3 text-center">
                        <h4><FaClipboardList className="me-2"/>Lista de Productos y Servicios</h4>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ProductList;