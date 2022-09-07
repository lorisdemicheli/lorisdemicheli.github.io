import { Component, OnInit, Input, ContentChildren, QueryList} from '@angular/core';
import { ListHead } from '../listhead/listhead.component';
import { ListItem } from '../listitem/listitem.component';

@Component({
  selector: 'listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.css']
})
export class ListBox implements OnInit {

  @ContentChildren(ListHead) header!: ListHead;
  @ContentChildren(ListItem) items!: ListItem;

  
  @Input()
  numerated: boolean = true;
  @Input()
  model!: any[];

  ngOnInit(): void {
    
  }
  
}