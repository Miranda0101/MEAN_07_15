import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { UserService } from './user/user.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class FetchDataResolver implements Resolve<User> {
  constructor(private userService: UserService){}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    const id = route.paramMap.get('id')?.toString() ?? '1';

    return this.userService.getUser(+id).pipe(
      tap((data)=>console.log("in resolver",data))
    );
  }
}
