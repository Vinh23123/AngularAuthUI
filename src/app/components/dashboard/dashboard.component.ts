import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from "./../../services/api.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  public users:any = [];
  constructor( private auth: AuthService, private api :ApiService){}


  ngOnInit() {
    this.api.getUsers().subscribe(res =>{
      this.users = res;
    })
  
  }

  logout(){
    this.auth.signOut();
  }
}
