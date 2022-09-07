import { Component, OnInit, Input, QueryList, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class Otp implements OnInit {

  @Input()
  text!: string;

  @ViewChild('input') 
  inputs!: QueryList<ElementRef>;


  ngOnInit(): void {
    
  }
  
  keyUp(event: any) {
    const input = event.target;
    let value = input.value;
    input.value = "";
    input.value = value ? value[0] : "";

    let fieldIndex = input.dataset.index;
    if(value.length > 0 && fieldIndex < this.inputs.length - 1) {
        input.nextElementSibling.focus();
    }

    if(event.key === "Backspace" && fieldIndex > 0){
        input.previousElementSibling.focus();
    }

    if(fieldIndex === this.inputs.length -1) {
        this.submit();
    }
  }

  submit() {
    console.log("Submitting");

    let otp = "";
    this.inputs.forEach((input: any) => {
        otp += input.value;
        input.disabled = true;
        input.classList.add("disabled");
    });
    console.log(otp);
  }
}