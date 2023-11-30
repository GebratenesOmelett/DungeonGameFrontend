import { Component } from '@angular/core';
import {SuccededService} from "../../../service/alerts/succeded.service";

@Component({
  selector: 'app-register-succed',
  templateUrl: './register-succed.component.html',
  styleUrls: ['./register-succed.component.css'],
})
export class RegisterSuccedComponent {
  constructor(public succededService: SuccededService) {
  }
}
