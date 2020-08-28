import { Injectable } from '@angular/core';

import { User } from '../models/users';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userAPIUrl = `${environment.apiUrl}user`;

  constructor(private httpClient: HttpClient) { }

  login(userForm): Observable<User>{
    console.log(userForm);
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Orgin': '*'
      })
    };
    return this.httpClient.post<User>(`${this.userAPIUrl}/login`, userForm, httpHead);
  }

  addUser(userForm): Observable<boolean> {
    console.log(userForm);
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Orgin': '*'
      })
    };
    return this.httpClient.post<boolean>(this.userAPIUrl, userForm, httpHead);
  }
}
