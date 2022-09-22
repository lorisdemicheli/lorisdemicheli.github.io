import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { GoogleUser } from 'src/app/interface/GoogleUser';

@Component({
  templateUrl: './test.component.html',
})
export class Test {

  constructor(private oauthService: OAuthService) {
  }

  public login() {
    this.oauthService.initLoginFlow();
    this.oauthService.checkSession()
  }

  public logoff() {
    this.oauthService.logOut();
  }

  public get name() {
    let claims = this.oauthService.getIdentityClaims() as GoogleUser;
    //console.log(claims)
    if (!claims) return null;
    return claims.name;
  }

}