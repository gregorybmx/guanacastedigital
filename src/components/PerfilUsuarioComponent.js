import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useLoginAPI } from '../hooks/usuarios/useLoginAPI';

const PerfilUsuarioComponent = () => {
    const now = new Date();
    now.setHours(now.getHours() - 6);
    const formattedDate = now.toISOString();
    const { user, logout, getAccessTokenSilently } = useAuth0();

    const usuario = {
        V_ID: user.sub,
        V_CORREO: user.email,
        V_NOMBRE_COMPLETO: user.name,
        V_IMAGEN_URL: user.picture,
        V_FECHA_INGRESO: formattedDate,
        V_ULTIMO_LOGGEO: formattedDate
    }

    useLoginAPI(usuario);

    getToken();

    async function getToken() {
        const token = await getAccessTokenSilently();
        usuario.token = token;
        window.localStorage.setItem('Usuario', JSON.stringify(usuario));
    }

    return (
        <div className="dropdown">
            <button className="nav-link text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={usuario.V_IMAGEN_URL} alt={usuario.V_NOMBRE_COMPLETO + " imagen de perfil"} className='w-25' />

            </button>
            <ul className="dropdown-menu">
                <li className='text-center'><a className="dropdown-item" href="/">{usuario.V_NOMBRE_COMPLETO}</a></li>
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