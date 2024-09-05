import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService){}
  onLogin(){
    this.authService.login('123@gmail.com', '1234').subscribe(
      (data: any)=>{
        console.log("in login component",data);
        this.authService.saveToken(data['access_token']);
      }
    );
  }

  onLogout(){
    this.authService.logOut();
  }
}
