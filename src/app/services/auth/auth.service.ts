import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { SocialUser } from '@abacritt/angularx-social-login';
import { AuthInterface } from 'src/app/interface/AuthInterface';
import { CookieService } from 'ngx-cookie-service';
import { GenericResposeInterface } from 'src/app/interface/GenericResponseInterface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint = environment.apiUrl + "auth/";
  static cookieName = "bdm";

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  checkAuth() {
    return this.http.post<AuthInterface>(this.endpoint + "verify", null, {
      headers: {
        'Authorization': 'Bearer ' + this.cookieService.get(AuthService.cookieName)
      }
    });
  }

  login(user: SocialUser) {
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
  }
}
