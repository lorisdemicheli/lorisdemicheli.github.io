import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthInterface } from 'src/app/interface/AuthInterface';
import { GenericResposeInterface } from 'src/app/interface/GenericResponseInterface';
import { ApiService } from 'src/app/services/api/api.service';
import { GoogleApiService } from 'src/app/services/api/google-api.service';

@Component({
  selector: 'page-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class PageMatch implements OnInit {

  login: boolean = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private googleAuth: GoogleApiService) {
  }

  ngOnInit() {
    this.googleAuth.checkAuth().subscribe((resAuth: AuthInterface) => {
      if (!resAuth.error) {
        this.route.params.subscribe((params) => {
          this.api.qrmatch(params["code"]).subscribe((res: GenericResposeInterface) => {
            if (res.status == 200) {
              this.router.navigate(['/user/'+resAuth.username]);
            }
          });
        });
      } else {
        this.login = true;
      }
    });
  }
}

