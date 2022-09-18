import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from './services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.checkAuth().pipe(
      map((res: HttpResponse<Object>) => res.status == 200),
      tap((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.navigate(['test']);
        }
      })
    );
  }
}