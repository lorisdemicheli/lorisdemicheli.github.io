import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit, Input, Type } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class Test implements OnInit {

  valueQr: String = "loris.demi";

  ngOnInit() { }


  constructor(private router: Router,
    private socialAuthService: SocialAuthService) {
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['meme']));
  }
}

