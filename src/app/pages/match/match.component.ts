import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { GenericRespose } from 'src/app/services/response/GenericResponse';

@Component({
  selector: 'page-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class PageMatch implements OnInit {

  login: boolean = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private api: ApiService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.api.qrmatch(params["code"])
        .pipe(catchError(err => {
          this.router.navigate(['/'], {
            state: {
              type: 'error',
              text: 'Codice non valido'
            }
          });
          return of()
        }))
        .subscribe((res: GenericRespose) => {
          this.router.navigate(['/'], {
            state: {
              type: 'success',
              text: 'Match avvenuto con successo'
            }
          });
        });
    });
  }
}

