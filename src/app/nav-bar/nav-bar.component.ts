import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  title = 'Profiles Manager';
  isLoggedIn = false;

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
  }

  logout() {
    this.loginService.logoutUser();
    window.location.href = "/login";
  }
}
