import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBar implements OnInit {
  ngOnInit(): void {
    
  }

  @Input()
  type: string = "text";
  @Input()
  placeholder: string = "Input box";
  @Input()
  name: string = "Name box";
  @Input()
  id: string = "id-box";
  @Input()
  required: boolean = false;
  

  onBlur(event: any){
    if(event.target.value != ""){
      event.target.nextElementSibling.classList.add("filled");
    } else {
      event.target.nextElementSibling.classList.remove("filled");
    }
  }
}