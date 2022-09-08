import { Component, OnInit, Input, Type } from '@angular/core';
import { Router } from '@angular/router';
import { CardInterface } from 'src/app/interface/CardInterface';

@Component({
  selector: 'page-bancaDelMeme',
  templateUrl: './bancaDelMeme.component.html',
  styleUrls: ['./bancaDelMeme.component.css']
})
//trasformazione in modulo cosi che il lazy load funziona
export class PageBancaDelMeme implements OnInit {
  items: CardInterface[] = [{
    rarity: "#DAA520",
    username: "Loris Demicheli",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
    description: "Loris il programmatore del sito attuale"
  },{
    rarity: "#C0C0C0",
    username: "Valerio Bovone",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
    description: "Valerio un novese DOC con il vino"
  },{
    rarity: "#B87333",
    username: "Carlo Treves",
    img: "https://i.redd.it/b3esnz5ra34y.jpg",
    description: "Carlo il popi-popi nazionale della banca del meme"
  }];

  constructor(private router: Router) { }
  
  addCard() {
    this.router.navigate(['/home']);
  }

  ngOnInit() { }
}

