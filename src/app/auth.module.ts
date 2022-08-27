import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable,of } from "rxjs";

@Injectable()
export class RedirectService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> {
    this.getInitialUserId().subscribe((userId: number) => {
      this.router.navigate(["users/" + userId]);
    });
    return of(false);
  }

  private getInitialUserId(): Observable<number> {
    return of(this.randomIntFromInterval(1, 6));
  }

  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}