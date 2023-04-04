import React from 'react'
import history from '../utils/History';
import { Auth0Provider } from '@auth0/auth0-react';
import { getConfig } from '../config';

const Auth0ProviderComponent = ({ children }) => {

    const onRedirectCallBack = (appState) => {
        history.push(
            appState && appState.returnTo ? appState.returnTo : window.location.pathname
        );
    };

    const config = getConfig();

    const providerConfig = {
        domain: config.domain,
        clientId: config.clientId,
        onRedirectCallBack,
        authorizationParams: {
            redirect_uri: window.location.origin,
            ...(config.audience ? {audience: config.audience} : null)
        }
    }

    return (
        <Auth0Provider {...providerConfig}>

            {children};

        </Auth0Provider>
    )
}

export default Auth0ProviderComponent