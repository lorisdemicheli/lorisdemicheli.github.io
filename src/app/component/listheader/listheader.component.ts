import { Component, OnInit, Input, ContentChildren, QueryList} from '@angular/core';

@Component({
  selector: 'listheader',
  templateUrl: './listheader.component.html',
})
export class ListHeader implements OnInit {

  @Input()
  name!: string;

  ngOnInit(): void {
    
  }
  
}