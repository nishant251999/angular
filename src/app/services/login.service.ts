import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../entity/credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = "http://localhost:8080";

  constructor(
    private httpClient:HttpClient,
    private router: Router
  ) { }

  doLogin(credentials:Credentials) {
    return this.httpClient.post(`${this.baseURL}/generate-token`,credentials);
  }

  registerUser(credentials:Credentials) {
    return this.httpClient.post(`${this.baseURL}/register`,credentials);
  }

  loginUser(token:string) : Boolean{
    localStorage.setItem("token",token); 
    window.location.href = "/home";
    return true;
  }

  isLoggedIn() {
    let token = localStorage.getItem("token");
    if(token==undefined || token=='' || token==null) {
      return false;
    } else {
      return true;
    }
  }
  logoutUser() {
    localStorage.removeItem("token");
    return true;
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
