import { LoginService } from './../services/login.service';
import { Credentials } from './../entity/credentials';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials :Credentials = new Credentials();
  formEmpty = false;
  invalidCred = false;

  constructor(
    private loginService:LoginService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Form is submitted");
    
    if(this.credentials.username=='' || this.credentials.username==null || this.credentials.password=='' || this.credentials.password==null ) {
      this.formEmpty = true;
      this.invalidCred = false;
    } else {
      this.formEmpty = false;
      console.log(this.credentials);

    this.loginService.doLogin(this.credentials).subscribe(
      (response:any) => {
        console.log(response.token);
        this.loginService.loginUser(response.token);
      },
      error => {
        console.error(error);
        this.invalidCred = true;
      }
    )
    }
  }
}
