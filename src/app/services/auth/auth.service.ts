import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SocialUser } from '@abacritt/angularx-social-login';
import { AuthInterface } from 'src/app/interface/AuthInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint = "lorisdemicheli-backend.vercel.app/auth/";
  private cookieName = "bdm";

  constructor(private http: HttpClient) {  }

  checkAuth() {
    return this.http.post(this.endpoint + "verify",this.header(),{ 
      observe: 'response' 
    });
  }

  login(user: SocialUser) {
    return this.http.post<AuthInterface>(this.endpoint + "login", {
      googleId: user.id
    });
  }

  loginPerform(user: SocialUser) {
    this.login(user).subscribe((data) => {
      localStorage.setItem(this.cookieName, data.token);
    });
  }

  register(user: SocialUser, birthdate: Date) {
    return this.http.post(this.endpoint + "register", {
      username: user.name,
      googleId: user.id,
      imgUrl: user.photoUrl,
      birthdate: birthdate
    },{ observe: 'response' });
  }

  header() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' +  localStorage.getItem(this.cookieName)
      })
    };
    
  }
}
