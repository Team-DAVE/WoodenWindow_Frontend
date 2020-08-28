import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Profile } from '../models/profile';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileAPIUrl = `${environment.apiUrl}profile`;

  constructor(private httpClient: HttpClient) { }

  getProfilesByUserId(userId: number): Observable<Profile[]> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Orgin': '*'
      })
    };
    return this.httpClient.get<Profile[]>(`${this.profileAPIUrl}/user/${userId}`, httpHead);
  }

  getProfileByProfileId(profileId: number): Observable<Profile> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Orgin': '*'
      })
    };
    return this.httpClient.get<Profile>(`${this.profileAPIUrl}/${profileId}`, httpHead);
  }

  addProfile(newProfileForm): Observable<Profile> {
    console.log(newProfileForm);
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Orgin': '*'
      })
    };
    return this.httpClient.post<Profile>(this.profileAPIUrl, newProfileForm, httpHead);
  }
}
