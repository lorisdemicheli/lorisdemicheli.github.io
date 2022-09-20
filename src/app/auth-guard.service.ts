import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { GenericResposeInterface } from './interface/GenericResponseInterface';
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
      map(() => {
        return true;
      }),
      catchError(() => {
        this.router.navigate(['test']);
        return of(false);
      })
    );
  }
}