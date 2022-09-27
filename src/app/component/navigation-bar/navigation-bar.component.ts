import { Component, OnInit, Input, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { GoogleApiService } from 'src/app/services/api/google-api.service';
import { AuthResponse } from 'src/app/services/response/AuthResponse';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBar implements OnInit {

  faBars = faBars;
  faTimes = faTimes;
  faSearch = faSearch;
  @ViewChild('inputSearch') 
  inputSearch?:ElementRef;

  constructor(private router: Router,
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

  public userProfile() {
    this.google.checkAuth().subscribe((resAuth: AuthResponse) => {
      this.route.params.subscribe((params) => {
        this.router.navigate(['/user/' + resAuth.username]);
      });
    });
  }

  public home() {
    this.router.navigate(['/']);
  }

  public search() {
    if(this.inputSearch?.nativeElement.value){
      this.router.navigateByUrl('/user/' + this.inputSearch.nativeElement.value);
    }
  }
}