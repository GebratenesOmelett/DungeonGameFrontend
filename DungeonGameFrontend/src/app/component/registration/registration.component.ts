import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegisterService} from "../../service/registration/register.service";
import {PlayerCreate} from "../../entity/player/player-create";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  registerFormGroup!: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private registerService: RegisterService) {
  }

  ngOnInit(): void {
    this.registerFormGroup = this.formBuilder.group({
      account: this.formBuilder.group({
        email:"",
        password:"",
        username:"",
        passwordRepeat:""
      })
    })
  }
  get email(){
    return this.registerFormGroup.get('account.email')
  }
  get password(){
    return this.registerFormGroup.get('account.password')
  }
  get username(){
    return this.registerFormGroup.get('account.username')
  }
  get passwordRepeat(){
    return this.registerFormGroup.get('account.passwordRepeat')
  }


  onSubmit() {
    let playerCreate = new PlayerCreate(this.email?.value,this.password?.value,this.username?.value);

    this.registerService.registerPlayer(playerCreate).subscribe(
      {
        next: response =>{
          alert('utworzono')
        },
        error: err =>{
          alert("coś poszło nie tak")
        }
      }
    );
  }
}
