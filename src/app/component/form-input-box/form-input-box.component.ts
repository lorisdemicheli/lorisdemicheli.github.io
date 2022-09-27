import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormError } from 'src/app/interface/FormError';

export const CUSTOMINPUT_VALUE_ACCESSOR: any = {
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
export class FormInputBox implements OnInit, ControlValueAccessor {
  @Input() type: string = "text";
  @Input() title!: string;
  @Input() formControlName!: string;
  @Input() form!: FormGroup<any>;
  @Input() errors!: {
    [key: string]: FormError[];
  }

  onTouchedCallback: () => void = () => { };
  onChangeCallback: (_: any) => void = () => { };

  ngOnInit(): void {
    if (this.title === undefined) {
      throw new Error("Title must be initialized");
    }
    if (this.errors === undefined) {
      throw new Error("Errors must be initialized");
    }
    if (this.form === undefined) {
      throw new Error("Form must be initialized");
    }
    if (this.formControlName === undefined) {
      throw new Error("formControlName must be initialized");
    }
    if (!this.form.controls[this.formControlName]) {
      throw new Error("Form controls not fount for given formControlName");
    }
  }

  writeValue(value: any) { }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}