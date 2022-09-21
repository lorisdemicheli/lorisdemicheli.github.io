import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  private endpoint = environment.apiUrl + "user/image/";


  constructor(private http: HttpClient, private cookieService: CookieService) { }

  upload(image: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('image', image);

    const req = new HttpRequest('POST', this.endpoint + "add", formData, {
      reportProgress: false,
      responseType: 'json'
    });

    return this.http.request(req);
  }


  upload2(image: File,imageName: string) {
    return this.http.put(this.endpoint, {
      image: image,
      imageName: imageName
    }, {
      headers: {
        'Authorization': 'Bearer ' + this.cookieService.get(AuthService.cookieName)
      }
    });
  }
}
