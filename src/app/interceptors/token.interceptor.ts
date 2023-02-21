import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { Route, Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private toast: NgToastService, private router : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     // sua doi token va set lai
    const myToken = this.auth.getToken();
    
    //this.start.load()
    if (myToken) {
      request = request.clone({
        setHeaders: {Authorization:`Bearer ${myToken}`} // "Bearer" + myToken
      })
    }

    // bắt lỗi 401  và cảnh báo, Token expired (hết hiệu lực) và chuyển hướng về đăng nhặp lại
    return next.handle(request).pipe(
      catchError((err:any) => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.toast.warning({detail:"Warning", summary:"Token is expired, Please Login again"});
            this.router.navigate(['login'])
          }
        }
        return throwError(() => new Error("Some other error occured"))
        }) 
    );
  }


}
