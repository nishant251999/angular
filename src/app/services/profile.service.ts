import { Profile } from '../entity/profile';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseURL = "http://localhost:8080/profiles";

  constructor(
    private httpClient: HttpClient
  ) { }
  
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
