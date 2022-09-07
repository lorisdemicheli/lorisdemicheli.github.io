import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBox implements OnInit {
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