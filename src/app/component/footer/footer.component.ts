import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'footer-comp',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
//trasformazione in modulo cosi che il lazy load funziona
export class FooterComp implements OnInit {
  pageName: string = "home"
  constructor() {}
  

  ngOnInit() {}
}