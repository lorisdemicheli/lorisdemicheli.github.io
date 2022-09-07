import { Component, OnInit, Input, Type } from '@angular/core';

@Component({
  selector: 'page-bancaDelMeme',
  templateUrl: './bancaDelMeme.component.html',
  styleUrls: ['./bancaDelMeme.component.css']
})
//trasformazione in modulo cosi che il lazy load funziona
export class PageBancaDelMeme implements OnInit {
  endDate: string = "2022-08-28 7:45";
  
  items: any[] = [{
    front: "ciao",
    back: "dietro"
  }, {
    front: "davanti",
    back: "back"    
  }, {
    front: "bobo",
    back: "back"    
  }, {
    front: "nana",
    back: "back"    
  }]

  constructor() {}
  

  ngOnInit() {}
}

