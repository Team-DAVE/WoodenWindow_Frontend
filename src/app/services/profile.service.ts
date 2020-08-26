import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Profile } from '../models/profile';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profiles: Profile[];
  profileUrl = 'http://localhost:8080/WoodenWindow_war_exploded/api/profile';

  constructor(private httpClient: HttpClient) {
    // this.profiles = [
    //   {
    //     profileId: 1,
    //     userId: 1,
    //     profileName: 'Coder',
    //     resume: 'This is the test resume number one',
    //   },
    //   {
    //     profileId: 2,
    //     userId: 1,
    //     profileName: 'Farmer',
    //     resume: 'This is the test resume number two',
    //   },
    //   {
    //     profileId: 3,
    //     userId: 1,
    //     profileName: 'Construction Worker',
    //     resume: 'This is the test resume number three',
    //   },
    //   {
    //     profileId: 4,
    //     userId: 2,
    //     profileName: 'Coder',
    //     resume: 'This is the test resume number four',
    //   },
    //   {
    //     profileId: 5,
    //     userId: 2,
    //     profileName: 'Farmer',
    //     resume: 'This is the test resume number five',
    //   },
    //   {
    //     profileId: 6,
    //     userId: 3,
    //     profileName: 'Coder',
    //     resume: 'This is the test resume number six',
    //   }
    // ];
   }

  getProfilesByUserId(userId: number): Observable<Profile[]> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Orgin': '*'
      })
    };
    return this.httpClient.get<Profile[]>(this.profileUrl + '/' + userId, httpHead);
  }

  getProfile(profileId: number): Profile {
    return null;
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
