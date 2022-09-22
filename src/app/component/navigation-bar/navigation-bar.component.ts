import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthInterface } from 'src/app/interface/AuthInterface';
import { GoogleApiService } from 'src/app/services/api/google-api.service';
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
    private route: ActivatedRoute,
    private google: GoogleApiService) {

  }

  ngOnInit(): void {

  }

  public login() {
    this.google.login()
  }

  public logout() {
    this.google.logout();
  }

  public isLoggedIn() {
    return this.google.isLoggedIn();
  }

  public home() {
    this.auth.checkAuth().subscribe((resAuth: AuthInterface) => {
      this.route.params.subscribe((params) => {
        this.router.navigate(['/user/' + resAuth.username]);
      });
    });
  }
}