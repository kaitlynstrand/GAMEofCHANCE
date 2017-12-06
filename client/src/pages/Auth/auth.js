import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables.js.example';
import history from '../../history';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: AUTH_CONFIG.apiUrl,
    responseType: 'token id_token',
    scope: 'openid profile read:messages'
  });

  userProfile;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentiction = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.scheduleRenewal();
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/tasks');
      } else if (err) {
        history.replace('/callback');
        console.log(err);
        alert(`Error: ${err.error}. Check console for more details.`);
      }
    });
  }

  setSession(authResult) {
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
      );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    this.scheduleRenewal();
    history.replace('/home');
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('scopes');
    this.userProfile = null;
    clearTimeout(this.tokenRenewalTimeout);
    history.replace('/home');
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  renewToken() {
    this.auth0.renewAuth(
    {
      audience: AUTH_CONFIG.apiUrl,
      redirectUri: AUTH_CONFIG.silentAuthRedirect,
      usePostMessage: true,
      postMessageDataType: 'auth0:silent-authentication',
    },
    (err, result) => {
      if (err) {
        alert(
          `Could not get a new token using silent authentication (${err.error}).`
        );
      } else {
        this.setSession(result);
        alert(`Successfully renewed auth!`);
      }
      }
    );
  }

  scheduleRenewal() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    const delay = expiresAt - Date.now();
    if (delay > 0) {
      this.tokenRenewalTimeout = setTimeout(() => {
        this.renewToken();
      }, delay);
    }
  }
}