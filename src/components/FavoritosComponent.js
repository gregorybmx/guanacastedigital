import React from 'react'
import { BsFillSuitHeartFill } from "react-icons/bs";

const FavoritosComponent = () => {
    return (
        <li className="nav-item me-3">
            <button type="button" className="nav-link text-white" data-bs-toggle="modal" data-bs-target="#favModal">
                <BsFillSuitHeartFill />
            </button>
            <div className="modal fade" id="favModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default FavoritosComponent