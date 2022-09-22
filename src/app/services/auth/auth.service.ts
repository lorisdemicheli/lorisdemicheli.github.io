import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { AuthInterface } from 'src/app/interface/AuthInterface';
import { CookieService } from 'ngx-cookie-service';
import { GenericResposeInterface } from 'src/app/interface/GenericResponseInterface';
import { environment } from '../../../environments/environment';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint = environment.apiUrl + "auth/";
  static cookieName = "bdm";

  constructor(private http: HttpClient, 
    private cookieService: CookieService, 
    private oauthService: OAuthService,
    private router: Router) { }

  checkAuth() {
    return this.http.post<AuthInterface>(this.endpoint + "verify", null, {
      headers: {
        'Authorization': 'Bearer ' + this.cookieService.get(AuthService.cookieName)
      }
    });
  }

  /*login() {
    this.http.post<AuthInterface>(this.endpoint + "login", {
      googleId: user.sub
    }).subscribe((res: AuthInterface) => {
      this.cookieService.set(AuthService.cookieName, res.token, 10);
    })
  }

  loginOrRegister() {
    if (!this.cookieService.check(AuthService.cookieName)) {
      this.http.post<AuthInterface>(this.endpoint + "login", {
        googleId: user.sub
      }).subscribe((resLog: AuthInterface) => {
        if (resLog.error) {
          this.http.post<AuthInterface>(this.endpoint + "register", {
            username: user.name,
            googleId: user.sub,
            imgUrl: user.picture,
            birthdate: user.birthday
          }).subscribe((resReg: AuthInterface) => {
            this.cookieService.set(AuthService.cookieName, resLog.token, 10);
          });
        } else {
          this.cookieService.set(AuthService.cookieName, resLog.token, 10);
        }
      });
    }
  }

  logOut() {
    //this.cookieService.delete(AuthService.cookieName);
    this.oauthService.logOut();
    this.router.navigate(['/']);
  }

  /*login(userId: string) {
    this.http.post<AuthInterface>(this.endpoint + "login", {
      googleId: userId
    }).pipe(tap((auth: AuthInterface) => {
      this.cookieService.set(AuthService.cookieName,auth.token,10);
    }));
  }/*

  /*login(user: SocialUser) {
    return this.http.post<AuthInterface>(this.endpoint + "login", {
      googleId: user.id
    }).pipe(tap((auth: AuthInterface) => {
      this.cookieService.set(AuthService.cookieName,auth.token,10);
    }));
  }

  register(user: SocialUser, birthdate: Date) {
    return this.http.post(this.endpoint + "register", {
      username: user.name,
      googleId: user.id,
      imgUrl: user.photoUrl,
      birthdate: birthdate
    }, { observe: 'response' });
  }*/
}
