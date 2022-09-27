import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthConfig, OAuthService } from "angular-oauth2-oidc";
import { CookieService } from "ngx-cookie-service";
import { catchError, of, throwError } from "rxjs";
import { GoogleUser } from "src/app/interface/GoogleUser";
import { environment } from '../../../environments/environment';
import { AuthResponse } from "../response/AuthResponse";


const authConfig: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: window.location.origin + '/',
    clientId: '1079479956590-clfr0i2v0bd5aa38ns76bcijdmpnrjfq.apps.googleusercontent.com',
    strictDiscoveryDocumentValidation: false,
    scope: 'openid profile email https://www.googleapis.com/auth/plus.login',
};

@Injectable({
    providedIn: 'root'
})
export class GoogleApiService {

    private endpoint = environment.apiUrl + "auth/";
    static cookieName = "bdm";

    constructor(private http: HttpClient,
        private readonly oAuthService: OAuthService,
        private cookieService: CookieService,
        private oauthService: OAuthService,
        private router: Router) {
        oAuthService.configure(authConfig);
        this.oAuthService.loadDiscoveryDocument().then(() => {
            this.oAuthService.tryLoginImplicitFlow().then(() => {
                if (this.oAuthService.hasValidAccessToken()) {
                    this.oAuthService.loadUserProfile().then((user) => {
                        this.loginOrRegisterBackend(((user as any).info as GoogleUser));
                    });
                }
            });
        });
    }

    login() {
        this.oAuthService.initLoginFlow();
    }

    logout() {
        this.cookieService.delete(GoogleApiService.cookieName);
        this.oauthService.logOut();
        this.router.navigate(['/']);
    }

    loginOrRegisterBackend(user: GoogleUser) {
        if (!this.cookieService.check(GoogleApiService.cookieName)) {
            this.http.post<AuthResponse>(this.endpoint + "login", {
                googleId: user.sub
            }).pipe(catchError(err => {
                this.http.post<AuthResponse>(this.endpoint + "register", {
                    username: user.name,
                    googleId: user.sub,
                    imgUrl: user.picture,
                    birthdate: user.birthday
                }).subscribe((resReg: AuthResponse) => {
                    this.loginOrRegisterBackend(user);
                });
                return of();
            })).subscribe((resLog: AuthResponse) => {
                this.cookieService.set(GoogleApiService.cookieName, resLog.token, 10);
            });
        }
    }

    isLoggedIn() {
        return this.cookieService.check(GoogleApiService.cookieName);
    }

    headers() {
        return {
            headers: {
                'Authorization': 'Bearer ' + this.cookieService.get(GoogleApiService.cookieName)
            },
        }
    }

    checkAuth() {
        return this.http.post<AuthResponse>(this.endpoint + "verify", null, this.headers());
    }
}