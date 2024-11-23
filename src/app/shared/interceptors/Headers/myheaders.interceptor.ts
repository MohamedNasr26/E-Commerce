import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyheadersInterceptor implements HttpInterceptor {

   myheaders = localStorage.getItem('userToken');
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      setHeaders: {
        'token': `${this.myheaders}`
      }
    });

    return next.handle(request);
  }
}
