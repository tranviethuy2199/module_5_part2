import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {createOptional} from "@angular/compiler/src/core";

// @ts-ignore
export const reConfirmPass: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const passWord = control.get("password");
  const confirmPassword = control.get("confirmPassword");

  if (passWord && confirmPassword && passWord.touched && passWord.value != confirmPassword.value) {
    return {"reConfirmPass": true}
  } else {
    return null
  }
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

   rfUser: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfUser = this._formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      country: ['' ,[
        Validators.required
      ]],
      country_option:this._formBuilder.array([]),

      age: ['',
        [Validators.min(18),
          Validators.required
        ]],
      gender: [0 , [
        Validators.required
      ]],
      phone: ['+84', [
        Validators.required,
        Validators.pattern("\\+84\\d{9,10}$")
      ]],
      password: [],
      confirmPassword: []
    }, {validators:reConfirmPass})
  }

  onSubmit() {
    if (this.rfUser.valid) {
      console.log(this.rfUser.value);
    }
  }



}
