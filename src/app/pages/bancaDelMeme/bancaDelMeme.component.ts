import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit, Input, Type } from '@angular/core';
import { Router } from '@angular/router';
import { CardInterface } from 'src/app/interface/CardInterface';

@Component({
  selector: 'page-bancaDelMeme',
  templateUrl: './bancaDelMeme.component.html',
  styleUrls: ['./bancaDelMeme.component.css']
})
//trasformazione in modulo cosi che il lazy load funziona
export class PageBancaDelMeme implements OnInit {
  items: CardInterface[] = [{
    colorCode: "#DAA520",
    username: "Loris Demicheli",
    img: "https://ik.imagekit.io/3jaj7cxcaa/default-image.jpg",
    description: "Loris il programmatore del sito attuale"
  },{
    colorCode: "#C0C0C0",
    username: "Valerio Bovone",
    img: "https://ik.imagekit.io/3jaj7cxcaa/upload/b3esnz5ra34y_1NueSvJR4.jpg",
    description: "Valerio un novese DOC con il vino"
  },{
    colorCode: "#B87333",
    username: "Carlo Treves",
    img: "https://ik.imagekit.io/3jaj7cxcaa/upload/b3esnz5ra34y_1NueSvJR4.jpg",
    description: "Carlo il popi-popi nazionale della banca del meme"
  }];

  constructor(private router: Router, private authService: SocialAuthService) { }
  
  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  
  addCard() {
    this.router.navigate(['/home']);
  }

  ngOnInit() { 
    this.refreshToken();
  }
}

