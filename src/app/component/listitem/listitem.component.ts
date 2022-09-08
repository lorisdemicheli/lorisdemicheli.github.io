import { Component, OnInit, Input, ContentChildren, QueryList, ContentChild, TemplateRef} from '@angular/core';
import { ListCell } from '../listcell/listcell.component';

@Component({
  selector: 'listitem',
  templateUrl: './listitem.component.html',
})
export class ListItem implements OnInit {

  @ContentChildren(TemplateRef) cells!: QueryList<ListCell>;

  @ContentChild(TemplateRef) templateRef!: TemplateRef<ListCell>;


  @Input()
  values: any[] = [{
    casa: "casa",
  },{
    casa: "mkia",
  }];

  ngOnInit(): void {
    
  }

  @Input()
  numerated: boolean = true;
  
}