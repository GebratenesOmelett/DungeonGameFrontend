import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginFormGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      account: this.formBuilder.group({
        email:"",
        password:"",
      })
    })
  }
  get email(){
    return this.loginFormGroup.get('account.email')
  }
  get password(){
    return this.loginFormGroup.get('account.password')
  }

  onSubmit() {

  }
}
