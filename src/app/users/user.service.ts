import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {User} from '../model/user';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient) {
  }

  private usersUrl = 'http://localhost:3001/api/users';  // URL to web api

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

}
