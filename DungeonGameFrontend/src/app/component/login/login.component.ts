import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PlayerLogin} from "../../entity/player/player-login";
import {LoginService} from "../../service/authorization/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginFormGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService){
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
    let playerLogin = new PlayerLogin(this.email?.value, this.password?.value);
    console.log(playerLogin)
    this.loginService.loginPLayer(playerLogin).subscribe(
      {
        next: response=>{
          alert("Logged")
    },
        error: err => {
          alert("Nie")
        }
      }
    )
  }
}
