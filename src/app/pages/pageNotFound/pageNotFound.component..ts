import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-not-found',
  templateUrl: './pageNotFound.component.html',
  styleUrls: ['./pageNotFound.component.css']
})
export class PageNotFound implements OnInit {
  pageName: string = "Error 404"
  constructor() {}

  ngOnInit() {}
}