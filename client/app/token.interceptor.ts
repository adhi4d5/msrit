import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {
  //  console.log("tokeeeee!!!!!",sessionStorage.getItem('token'));
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
     };
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
    return next.handle(request);
  }
}
