import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.login = this._formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['123456',[
        Validators.required,
        Validators.minLength(6)
      ]],
    })
  }

}
