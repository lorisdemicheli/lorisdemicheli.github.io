import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit, Input, Type } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class Test implements OnInit {

  valueQr: String = "MIRTO";

  user: SocialUser | undefined;

  ngOnInit() { 
    this.socialAuthService.authState.subscribe((user) => {
      if(user){
        console.log(user);
        this.authService.loginPerform(user);
      }     
    });
  }


  constructor(private router: Router,
    private socialAuthService: SocialAuthService,
    private authService: AuthService) {
  }
}

