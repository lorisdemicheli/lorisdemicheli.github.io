import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map, take, switchMap } from "rxjs/operators";
import { ApiService } from "../services/api/api.service";

function isEmptyInputValue(value: any): boolean {
  return value === null || value.length === 0;
}

@Injectable({
  providedIn: "root"
})
export class UsernameValidator {
  constructor(private api: ApiService) {}

  existingUsernameValidator(username: string = ""): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Promise<{ [key: string]: any } | null>
      | Observable<{ [key: string]: any } | null> => {
      if (isEmptyInputValue(control.value)) {
        return of(null);
      } else if (control.value === username) {
        return of(null);
      } else {
        return control.valueChanges.pipe(
          take(1),
          switchMap(_ =>
            this.api
              .findUser(control.value)
              .pipe(
                map(res =>
                  res.user ? { existinguser: true } : null
                )
              )
          )
        );
      }
    };
  }
}