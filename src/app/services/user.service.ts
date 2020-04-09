import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:4200/'; 

@Injectable(
  {
  providedIn: 'root'
}
)
export class UserService {

  constructor(private http: HttpClient) { }


  create(data) {
    return this.http.post(baseUrl+"newUser", data);
  }

  test(){
    return console.log("ON EST DANS LE USERSERVICE")
  }

}