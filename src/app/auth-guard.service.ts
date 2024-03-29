import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { GoogleApiService } from './services/api/google-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private googleAuth: GoogleApiService) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.googleAuth.checkAuth().pipe(
      map(() => {
        return true;
      }),
      catchError(() => {
        this.router.navigate(['/'], {
          state: {
            type: 'error',
            text: 'Devi essere loggato'
          }
        });
        return of(false);
      })
    );
  }
}