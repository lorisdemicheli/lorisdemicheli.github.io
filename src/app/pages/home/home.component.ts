import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterface } from 'src/app/interface/AuthInterface';
import { CardInterface } from 'src/app/interface/CardInterface';
import { CardsInterface } from 'src/app/interface/CardsInterface';
import { QrCodeInterface } from 'src/app/interface/QrCodeInterface';
import { ApiService } from 'src/app/services/api/api.service';
import { GoogleApiService } from 'src/app/services/api/google-api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//trasformazione in modulo cosi che il lazy load funziona
export class PageHome implements OnInit {
  items?: CardInterface[];
  code?: string;
  ownership: boolean = false;

  private lastLoadNumber?: Number;

  constructor(private api: ApiService,
    private route: ActivatedRoute,
    private googleAuth: GoogleApiService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.googleAuth.checkAuth().subscribe((auth: AuthInterface) => {
        if (params["username"] == auth.username) {
          this.ownership = true;
        }
      })
      this.api.cards(params["username"]).subscribe((cards: CardsInterface) => {
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
    this.api.qrcode().subscribe((res: QrCodeInterface) => {
      this.code = environment.siteUrl + "match/" + res.code;
    });
  }

  //TODO
  loadOnScroll() {

  }
}

