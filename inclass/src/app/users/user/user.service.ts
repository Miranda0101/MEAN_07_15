import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // api = 'https://jsonplaceholder.typicode.com/users';
  api = 'http://localhost:3000/user/all'
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.api);
  }
  getUser(id: number): Observable<User>{
    return this.http.get<User>(`${this.api}/${id}`);
  }
}
