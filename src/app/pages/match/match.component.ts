import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericResposeInterface } from 'src/app/interface/GenericResponseInterface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'page-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class PageMatch implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private api: ApiService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.api.qrmatch(params["code"]).subscribe((res: GenericResposeInterface) => {
        if (res.status == 200) {
          this.router.navigate(['/']);
        }
      })
    });
  }
}

