import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
private fullName$ = new BehaviorSubject<string>("")
private role$ = new BehaviorSubject<string>("")


  constructor() { }
    // getter role
    public getRoleFromStore(){
      return this.role$.asObservable();
    }
    // setter role
    public setRoleForStore(role : string){
      this.role$.next(role);
    }
    // getter fullname
    public getFullNameFromStore(){
      return this.fullName$.asObservable();
    }
    //setter fullname
    public setFullNameForStore(fullname : string){
      this.fullName$.next(fullname);
    }
}