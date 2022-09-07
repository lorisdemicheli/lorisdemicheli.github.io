import { Component, OnInit, Input, ContentChildren, QueryList} from '@angular/core';

@Component({
  selector: 'listcell',
  templateUrl: './listcell.component.html',
})
export class ListCell implements OnInit {

  @Input()
  value!: string;
  @Input()
  each!: any;

  ngOnInit(): void {
    console.log(this.each)
  }
  
}