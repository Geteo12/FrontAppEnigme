import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:4201'; 

@Injectable(
  {
  providedIn: 'root'
}
)
export class UserService {

  constructor(private http: HttpClient) { }


  create(data) {
    return this.http.post(baseUrl, data);
  }

  test(){
    return console.log("ON EST DANS LE USERSERVICE")
  }

}