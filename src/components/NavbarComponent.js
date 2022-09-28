import React from 'react'
import { useNavigate } from 'react-router-dom';

import { FiShoppingCart } from "react-icons/fi";

const NavbarComponent = () => {

  const navigate = useNavigate();
  const registerLink = () => {
    navigate("registro");
  }

  const loginLink = () => {
    navigate("login");
  }
  return (
 
    <nav className="navbar navbar-expand-xl bg-green "  >
    <div className="container-fluid">
        <div className="logo">
          <img src='./gd_logo.png' width='150px'  alt=''/>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <form className="d-flex" role="search">
              <input className="form-control me-1 " type="search" placeholder="Buscar" aria-label="Search"/>
              <button className="btn btn-outline-success text-white" type="submit">
                Buscar</button>
          </form>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">
          </ul>
          < ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link  text-white" color="white" onClick={loginLink}>Iniciar Sesion</a>
            </li>
            <li className="nav-item" >
              <a className="nav-link text-white"onClick={registerLink} >Registrarse</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="#"><FiShoppingCart/></a>
            </li>
          </ul>
      </div>
    </div>
  </nav>


  )
}

export default NavbarComponent