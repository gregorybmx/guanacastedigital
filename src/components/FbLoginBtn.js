import React from 'react';
import { FaFacebook } from 'react-icons/fa'

const LoginButton = ({onLogin}) => {
    const facebookLogin = () => {
        if (!window.FB) return;

        window.FB.getLoginStatus(response => {
            if (response.status === "connected") {
                facebookLoginHandler(response);
            }
            else {
                window.FB.login(facebookLoginHandler, { scoope: 'public_profile, email, user_location, user_birthday' });
            }
        });
    };

    const facebookLoginHandler = (response) => {
        if (response.status === "connected") {
            window.FB.api('/me?fields=id,name,email,picture,location,birthday', userData => {
                console.log(userData);

                const user = {
                    ...userData,
                    accessToken: response.authResponse.accessToken
                };
                
                onLogin(user);
            });
        }
    };

    return (
        <div className="LoginWrapper">
            <a onClick={facebookLogin} className="logo-fb btn-link">
                <h1><FaFacebook /></h1>
            </a>
        </div>
    );
};

export default LoginButton;