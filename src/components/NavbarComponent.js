import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ModalComponent from './ModalComponent';
import PerfilUsuarioComponent from './PerfilUsuarioComponent';
import { BsFillSuitHeartFill } from "react-icons/bs";



const NavbarComponent = () => {

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const navigate = useNavigate();

  const registroLink = () => {
    navigate("/registro")
  }

  const loginLink = () => {
    navigate("/login");
  }

  const homeLink = () => {
    navigate("/");
  }

  if (!isAuthenticated) {
    window.localStorage.clear();
  }

  return (

    <nav className="navbar navbar-expand-xl bg-green "  >
      <div className="container-fluid">
        <div className="logo">
          <img src='./gd_logo.png' width='150px' alt='Lgotipo de Guanacaste Digital' onClick={homeLink} />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-2 " id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <input className="form-control me-1 " type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline-success text-white" type="submit">
              Buscar</button>
          </form >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">
          </ul>
          {isAuthenticated ?
            < ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <PerfilUsuarioComponent />
              </li>
              <li className="nav-item">
                <ModalComponent
                  classButton='nav-link text-white mt-2'
                  textButton={<BsFillSuitHeartFill />}
                  title="Favoritos"
                  content={
                    <div>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry the Bird</td>
                            <td>Jacob</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  }
                  buttonCloseText="Cerrar"
                />
              </li>
            </ul >
            :
            < ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link text-white" color="white" onClick={loginLink}>Iniciar Sesion</button>
              </li>
              <li className="nav-item" >
                <button className="nav-link text-white" onClick={registroLink}>
                  Registrarse
                </button>
              </li>
            </ul >
          }
        </div >
      </div >
    </nav >


  )
}

export default NavbarComponent