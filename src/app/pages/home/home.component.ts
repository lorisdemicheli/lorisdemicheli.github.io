import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/component/toast/toast-service';
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

  constructor(private api: ApiService,
    private route: ActivatedRoute,
    private googleAuth: GoogleApiService,
    private toastService: ToastService) { }

  ngOnInit() {
    
  }

  showDanger() {
    this.toastService.error("Devi essere loggato",2000);
  }
}

