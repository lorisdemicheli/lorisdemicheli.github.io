import { Component, OnInit, Input, ContentChildren, QueryList} from '@angular/core';
import { ListHeader } from '../listheader/listheader.component';

@Component({
  selector: 'listhead',
  templateUrl: './listhead.component.html',
})
export class ListHead implements OnInit {

  @ContentChildren(ListHeader) headers!: QueryList<ListHeader>;

  ngOnInit(): void {
    
  }

  @Input()
  numerated: boolean = true;
  
}