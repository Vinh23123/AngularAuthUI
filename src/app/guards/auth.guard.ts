import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth : AuthService, private router: Router, private toast: NgToastService){
// chặn người dụng truy cập trực tiếp vào dashboard mà chưa đăng nhặp
  }
  canActivate():boolean {
    if(this.auth.isLoggedIn()){
       return true;
    }else{
      this.toast.error({detail: "ERROR", summary: "Please Login First"}); 
      this.router.navigate(['/login']);
      return false;
    }

  }
}
