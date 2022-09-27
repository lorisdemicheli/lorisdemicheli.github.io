import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { GoogleApiService } from './google-api.service';
import { CardsResponse } from '../response/CardsResponse';
import { QrCodeResponse } from '../response/QrCodeResponse';
import { GenericRespose } from '../response/GenericResponse';
import { UserResponse } from '../response/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private endpoint = environment.apiUrl;

  constructor(private http: HttpClient, 
    private googleAuth: GoogleApiService) { }

  cards(username: string) {
    return this.http.get<CardsResponse>(this.endpoint + "user/" + username + "/match");
  }

  qrcode() {
    return this.http.post<QrCodeResponse>(this.endpoint + "qr/generate",null,this.googleAuth.headers());
  }

  qrmatch(code: string) {
    return this.http.post<GenericRespose>(this.endpoint + "qr/" + code,null,this.googleAuth.headers());
  }

  findUser(username: string) {
    return this.http.get<UserResponse>(this.endpoint + "user/" + username);
  }
}
