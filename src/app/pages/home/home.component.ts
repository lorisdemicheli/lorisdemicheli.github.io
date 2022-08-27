import { Component, OnInit, Input, Type } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//trasformazione in modulo cosi che il lazy load funziona
export class PageHome implements OnInit {
  pageName: string = "home"

  endDate: string = "2022-08-28 7:45";
  constructor() {}
  

  ngOnInit() {}
}

