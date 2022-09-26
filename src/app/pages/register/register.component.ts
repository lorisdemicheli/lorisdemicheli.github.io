import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormError } from 'src/app/interface/FormError';

@Component({
  selector: 'page-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class PageRegister implements OnInit {
  form: FormGroup;
  errors: {
    [key: string]: FormError[];
  }

  constructor(private formBuilder: FormBuilder) {
    //console.log(Validators.min.name)
    this.form = this.formBuilder.group(
      {
        firstname: ['', [Validators.required,Validators.minLength(6)]],
        username: ['', [Validators.required,Validators.minLength(6)]],
      }
    );
    this.errors = {
      firstname: [{
        condition: "required",
        errorDescription: "Field required"
      },{
        condition: "minlength",
        errorDescription: "Min length 6 required"
      }],
      username: [{
        condition: "required",
        errorDescription: "Field required"
      },{
        condition: "minlength",
        errorDescription: "Min length 6 required"
      }]
    }
  }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    console.log(this.form)
    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }
}


