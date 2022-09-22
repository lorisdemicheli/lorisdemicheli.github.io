// This api will come in the next version

import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    // Url of the Identity Provider
    issuer: 'https://accounts.google.com',

    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/',

    // URL of the SPA to redirect the user after silent refresh
    silentRefreshRedirectUri: window.location.origin + '/',

    // The SPA's id. The SPA is registerd with this id at the auth-server
    clientId:
        '1079479956590-clfr0i2v0bd5aa38ns76bcijdmpnrjfq.apps.googleusercontent.com',

    strictDiscoveryDocumentValidation: false,

    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: 'openid profile email https://www.googleapis.com/auth/plus.login',

    showDebugInformation: true,

    sessionChecksEnabled: true,
};