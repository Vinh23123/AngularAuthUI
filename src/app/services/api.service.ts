import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'https://localhost:7033/api/User/'

  constructor(private http: HttpClient) { }
// lấy dữ liệu từ database thông qua baseUrl: 'https://localhost:7033/api/User/'
  getUsers(){
    return this.http.get<any>(this.baseUrl)
  }
}
 