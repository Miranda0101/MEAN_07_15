import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Do sth to the request
    const token = this.auth.getToken();
    if (token){
      const clonedReq = request.clone({
        setHeaders: {'Authentication': `Bearer ${token}`}
      })
      return next.handle(clonedReq);
    }
    return next.handle(request);
  }
}
