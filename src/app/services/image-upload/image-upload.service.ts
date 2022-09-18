import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpHeader = {
  
}

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  private endpoint = "lorisdemicheli-backend.vercel.app/user/image/add";

  constructor(private http: HttpClient) { }

  upload(image: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('image', image);

    const req = new HttpRequest('POST', this.endpoint, formData, {
      reportProgress: false,
      responseType: 'json'
    });

    return this.http.request(req);
  }


  upload2(image: File): Observable<any> {
    return this.http.put(this.endpoint,{ 
      image: image
    },);
  }
}
