import React from 'react'
import { useNavigate } from "react-router-dom";

import { FiShoppingCart } from "react-icons/fi";

function NavbarComponent() {

  const navigate = useNavigate();

  const registerLink = () => {
      navigate("registro");
  }

  const loginLink = () => {
    navigate("login");
}

const homeLink = () => {
  navigate("/");
}

  return (

    <nav className="navbar navbar-expand-lg bg-green "  >
      <div className="container-fluid">
        <div className="logo">
          <img src='./gd_logo.png' width='150px' alt='Lgotipo de Guanacaste Digital' onClick={homeLink}/>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <input className="form-control me-1 " type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              <font color="white">Buscar</font></button>
          </form>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">
          </ul>
          < ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " onClick={loginLink}>Iniciar Sesion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " onClick={registerLink}>Registrarse</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#"><FiShoppingCart /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  )
}

export default NavbarComponent