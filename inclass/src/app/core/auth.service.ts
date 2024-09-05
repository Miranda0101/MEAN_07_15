import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = of({login: true});
  private api = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    return this.http.post(`${this.api}/auth/login`, 
      { email: email, password: password});
  }
  //save the token
  saveToken(token: string){
    localStorage.setItem('access_token', token);
  }

  //get the Token
  getToken(){
    return localStorage.getItem('access_token');
  }

  logOut(){
    localStorage.removeItem('access_token');
  }
}
