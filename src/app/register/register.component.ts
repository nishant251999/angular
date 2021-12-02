import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Credentials } from '../entity/credentials';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials: Credentials = new Credentials();
  alreadyExists = false;
  success = false;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!(this.credentials.username=='' || this.credentials.username==null || this.credentials.password=='' || this.credentials.password==null)) {
      this.loginService.registerUser(this.credentials).subscribe(
        response => {
          console.log(response);
          this.success = true;
        },
        (error:any) => {
          console.log(error);
          if(error.status==406) {
            this.alreadyExists = true;
          }
        }
      );
    }
  }
}
