import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { Router } from '@angular/router';
/* [ Service ] */
import { AppService } from './app.service';
@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(
    public auth: AppService,
    public router: Router,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .catch((err: any, caught) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            localStorage.removeItem('staybazar');
              this.router.navigate(['/']);
          }
          return Observable.throw(err.error);
        }
      });
  }
}
