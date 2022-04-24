import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
/* [ Service ] */
import { AppService } from './app.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public auth: AppService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const token = this.auth.getToken();
    // if (token !== undefined && token !== null) {
    req = req.clone({
      setHeaders: {
        // Authorization: `Bearer ${token.access_token}`,
        Accept: 'application/json'
      }
    });
    // }
    return next.handle(req);
  }
}
