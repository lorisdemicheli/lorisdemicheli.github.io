import { Component, OnInit, Input, forwardRef, ViewChild} from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { FormError } from 'src/app/interface/FormError';

export const CUSTOMINPUT_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormInputBox),
  multi: true,
};


@Component({
  selector: 'form-input-box',
  templateUrl: './form-input-box.component.html',
  styleUrls: ['./form-input-box.component.css'],
  providers: [CUSTOMINPUT_VALUE_ACCESSOR]
})
export class FormInputBox implements OnInit,ControlValueAccessor  {
  @ViewChild('input') input: any;
  @Input() title!: string;
  @Input() errors!: {
    [key: string]: FormError[];
  }
  @Input() form!: FormGroup<any>;
  @Input() id!: string;

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  ngOnInit(): void {
    if(this.title === undefined){
      throw new Error("Title must be initialized");
    }
    if(this.errors === undefined){
      throw new Error("Errors must be initialized");
    }
    if(this.form === undefined){
      throw new Error("Form must be initialized");
    }
    if(this.id === undefined){
      throw new Error("Id must be initialized");
    }
  }

  change(value:any) {
    this.onChangeCallback(value);
  }

  touch(value:any) {
    this.registerOnTouched(value);
    this.form.controls[this.id].markAsTouched();
  }
  // ControlValueAccessor Interface
  writeValue(value: any) {
    //this.input.value = value;
  }

  // ControlValueAccessor Interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // ControlValueAccessor Interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}