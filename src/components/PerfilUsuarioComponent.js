import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const PerfilUsuarioComponent = () => {
    const { user, logout, getAccessTokenSilently} = useAuth0();

    const usuario = {
        id: user.sub,
        nombre: user.given_name,
        apellido: user.family_name,
        email: user.email,
        imagen: user.picture,
        token: ''
    }

    getToken();

    async function getToken() {
        const token = await getAccessTokenSilently();
        usuario.token = token;
        window.localStorage.setItem('Usuario', JSON.stringify(usuario));
    }

    return (
        <div className="dropdown">
            <button className="nav-link text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={usuario.imagen} alt={usuario.nombre + " " +  usuario.apellido} className='w-25' />

            </button>
            <ul className="dropdown-menu">
                <li className='text-center'><a className="dropdown-item" href="/">{usuario.nombre}</a></li>
                <hr />
                <li><a className="dropdown-item" href="/">Configuracion</a></li>
                <li><a className="dropdown-item" href="/">Favoritos</a></li>
                <hr />
                <li><button className="dropdown-item" onClick={() => logout()}>Cerrar Sesión</button></li>
            </ul>
        </div>
    )
}

export default PerfilUsuarioComponent