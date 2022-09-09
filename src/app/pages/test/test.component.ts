import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit, Input, Type } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class Test implements OnInit {

  valueQr: String = "MIRTO";

  user: SocialUser | undefined;

  ngOnInit() { 
    this._authService.authState.subscribe((user) => {
      this.user = user;
    });
  }


  constructor(private router: Router,
    private _authService: SocialAuthService) {
  }

  loginWithGoogle(): void {
    this._authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => console.log("Logged in"))
      .catch((err) => console.log(err));
  }
}

