import { Injectable } from '@angular/core';

import { User } from '../models/users';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = 'http://localhost:8080/WoodenWindow_Backend_war_exploded/api/user';

  constructor(private httpClient: HttpClient) { }

  login(userForm): Observable<User>{
    console.log(userForm);
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Orgin': '*'
      })
    };
    return this.httpClient.post<User>(this.userUrl + '/login', userForm, httpHead);
  }

  addUser(userForm): Observable<boolean> {
    console.log(userForm);
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Orgin': '*'
      })
    };
    return this.httpClient.post<boolean>(this.userUrl, userForm, httpHead);
  }
}
