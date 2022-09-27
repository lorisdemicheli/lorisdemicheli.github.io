import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs';
import { Card } from 'src/app/interface/Card';
import { ApiService } from 'src/app/services/api/api.service';
import { GoogleApiService } from 'src/app/services/api/google-api.service';
import { AuthResponse } from 'src/app/services/response/AuthResponse';
import { CardsResponse } from 'src/app/services/response/CardsResponse';
import { QrCodeResponse } from 'src/app/services/response/QrCodeResponse';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'page-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
//trasformazione in modulo cosi che il lazy load funziona
export class PageUser implements OnInit {
  items?: Card[] = undefined;
  code?: string;
  ownership?: boolean = false;

  private lastLoadNumber?: Number;

  constructor(private api: ApiService,
    private route: ActivatedRoute,
    private googleAuth: GoogleApiService,
    private modalService: NgbModal) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.googleAuth.checkAuth().pipe(tap(() => {
        this.ownership = false;
      })).subscribe((auth: AuthResponse) => {
        if (params["username"] == auth.username) {
          this.ownership = true;
        }
      })
      this.api.cards(params["username"]).pipe(tap(() => {
        this.items = undefined;
      })).subscribe((cards: CardsResponse) => {
        this.items = cards.cards;
        this.lastLoadNumber = cards.cards.length;
      });
    });
  }

  open(content: any) {
    this.modalService.open(content).result.then((result) => { },
      (reason) => {
        this.code = undefined;
      }
    );
    this.api.qrcode().subscribe((res: QrCodeResponse) => {
      this.code = environment.siteUrl + "match/" + res.code;
    });
  }

  //TODO
  loadOnScroll() {

  }
}

