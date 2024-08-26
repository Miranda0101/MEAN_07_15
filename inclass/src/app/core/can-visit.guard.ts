import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CanVisitGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log("Can visit guard")
    // if (this.authService.isLogin) {
    //   return true;
    // } else {
    //   return false;
    // }
    return this.authService.isLogin.pipe(
      map((data)=>{
        if (data.login){
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
