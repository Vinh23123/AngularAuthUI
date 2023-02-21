import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Route, Router } from '@angular/router';
import {  } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "https://localhost:7033/api/User/"
  constructor(private http : HttpClient, private router : Router) { }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`, userObj)

  }
  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}Authenticate`, loginObj)
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }


  // setting token
  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }

  // getting token 
  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean{
      return !!localStorage.getItem('token')
  }
}
