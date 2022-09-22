import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthInterface } from 'src/app/interface/AuthInterface';
import { User } from 'src/app/interface/User';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBar implements OnInit {

  faBars = faBars;
  faTimes = faTimes;
  faSearch = faSearch;

  constructor(private oauthService: OAuthService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {

  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logout() {
    this.auth.logOut();
  }

  public isLoggedIn() {
    let user: User = this.oauthService.getIdentityClaims() as User;
    if (user != null) {
      this.auth.loginOrRegister(user)
    }
    return user != null;
  }

  public home() {
    console.log("resAuth")
    this.auth.checkAuth().subscribe((resAuth: AuthInterface) => {
      console.log(resAuth)
      this.route.params.subscribe((params) => {
        this.router.navigate(['/user/' + resAuth.username]);
      });
    });
  }
}