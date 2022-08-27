import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class PageLogin implements OnInit {
  pageName: string = "login"
  constructor() {}

  ngOnInit() {}
}