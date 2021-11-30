import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../entity/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseURL = "http://localhost:8080/profiles";
  token:any = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  generateToken() {
    this.httpClient.post("http://localhost:8080/generate-token",
                        {username:"nishant25",password:"123"})
                        .subscribe( data => {
                          this.token = data;
                          console.log(this.token);
                        });
  }
  getAllProfilesWithJwt(): Observable<Profile[]> {
    return this.httpClient.get<Profile[]>(this.baseURL,
     {headers: new HttpHeaders().set('Authorization', "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaXNoYW50MjUiLCJleHAiOjE2Mzc3NTYyMDEsImlhdCI6MTYzNzczODIwMX0.aFW5lIP7Vwju5m4l0ScaXxNKGMFmDn8yKteEFADRU3kBvlF5BwmmpiL5KPaKdZc9GH3ChdlcjpN_2n1oYHP1pA")});
  }   
  getAllProfiles(): Observable<Profile[]> {
    return this.httpClient.get<Profile[]>(this.baseURL);
  }

  addProfile(profile: Profile): Observable<Object> {
    return this.httpClient.post(this.baseURL,profile)
  }

  getProfileById(id: number): Observable<Profile> {
    return this.httpClient.get<Profile>(`${this.baseURL}/${id}`);
  }

  updateProfile(id: number, profile: Profile): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`,profile);
  }

  deleteProfile(id: number):Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`,{ responseType:"text"});
  }
}
