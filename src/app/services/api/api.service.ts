import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { SocialUser } from '@abacritt/angularx-social-login';
import { AuthInterface } from 'src/app/interface/AuthInterface';
import { CookieService } from 'ngx-cookie-service';
import { CardInterface } from 'src/app/interface/CardInterface';
import { QrCodeInterface } from 'src/app/interface/QrCodeInterface';
import { AuthService } from '../auth/auth.service';
import { GenericResposeInterface } from 'src/app/interface/GenericResponseInterface';
import { CardsInterface } from 'src/app/interface/CardsInterface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private endpoint = environment.apiUrl;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  cards(username: string) {
    return this.http.get<CardsInterface>(this.endpoint + "user/" + username + "/match");
  }

  qrcode() {
    return this.http.post<QrCodeInterface>(this.endpoint + "qr/generate",null,{
      headers: {
        'Authorization': 'Bearer ' + this.cookieService.get(AuthService.cookieName)
      }
    });
  }

  qrmatch(code: string) {
    return this.http.post<GenericResposeInterface>(this.endpoint + "qr/" + code,null,{
      headers: {
        'Authorization': 'Bearer ' + this.cookieService.get(AuthService.cookieName)
      },
    });
  }
}
