import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Profile } from '../models/profile';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileUrl = 'http://localhost:8080/WoodenWindow_Backend_war_exploded/api/profile';

  constructor(private httpClient: HttpClient) { }

  getProfilesByUserId(userId: number): Observable<Profile[]> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Orgin': '*'
      })
    };
    return this.httpClient.get<Profile[]>(this.profileUrl + '/user/' + userId, httpHead);
  }

  getProfileByProfileId(profileId: number): Observable<Profile> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Orgin': '*'
      })
    };
    return this.httpClient.get<Profile>(this.profileUrl + '/' + profileId, httpHead);
  }

  addProfile(newProfileForm): Observable<Profile> {
    console.log(newProfileForm);
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Orgin': '*'
      })
    };
    return this.httpClient.post<Profile>(this.profileUrl, newProfileForm, httpHead);
  }
}
