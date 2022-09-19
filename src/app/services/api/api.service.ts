import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { SocialUser } from '@abacritt/angularx-social-login';
import { AuthInterface } from 'src/app/interface/AuthInterface';
import { CookieService } from 'ngx-cookie-service';
import { CardInterface } from 'src/app/interface/CardInterface';
import { QrCodeInterface } from 'src/app/interface/QrCodeInterface';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private endpoint = "http://localhost:3000/";

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  cards(username: string) {
    return this.http.get<CardInterface[]>(this.endpoint + "user/" + username + "/match");
  }

  qrcode() {
    return this.http.post<QrCodeInterface>(this.endpoint + "qr/generate",null,{
      headers: {
        'Authorization': 'Bearer ' + this.cookieService.get(AuthService.cookieName)
      }
    });
  }
}
