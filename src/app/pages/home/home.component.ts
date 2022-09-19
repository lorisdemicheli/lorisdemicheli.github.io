import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardInterface } from 'src/app/interface/CardInterface';
import { QrCodeInterface } from 'src/app/interface/QrCodeInterface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//trasformazione in modulo cosi che il lazy load funziona
export class PageHome implements OnInit {
  items?: CardInterface[];
  code?: QrCodeInterface;

  private lastLoadNumber?: Number;

  constructor(private api: ApiService, private route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.api.cards(params["username"]).subscribe((cards: CardInterface[]) => {
        this.items = cards;
        this.lastLoadNumber = cards.length;
      });
    });
  }

  open(content: any) {
    this.modalService.open(content).result.then((result) => { },
      (reason) => {
        this.code = undefined;
      }
    );
    this.api.qrcode().subscribe((code: QrCodeInterface) => {
      this.code = code;
    });
  }

  //TODO
  loadOnScroll() {

  }
}

