import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormError } from 'src/app/interface/FormError';
import { UsernameValidator } from 'src/app/util/userValidator';

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

  constructor(private formBuilder: FormBuilder,private usernameValidator: UsernameValidator) {
    //console.log(Validators.minLength(6).name.toLowerCase())
    this.form = this.formBuilder.group(
      {
        firstname: ['', [Validators.required,Validators.minLength(6)]],
        username: ['', [Validators.required,Validators.minLength(6)],[this.usernameValidator.existingUsernameValidator()]]
      }
    );
    this.errors = {
      firstname: [{
        condition: "required",
        errorDescription: "Questo campo è richiesto"
      },{
        condition: "minlength",
        errorDescription: "La lunghezza minima è di 6"
      }],
      username: [{
        condition: "required",
        errorDescription: "Questo campo è richiesto"
      },{
        condition: "minlength",
        errorDescription: "La lunghezza minima è di 6"
      },{
        condition: "existinguser",
        errorDescription: "Lo username è già utilizzato"
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


