import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { UserInfoModel } from '../models/UserInfoModel';







const baseUrl = 'http://localhost:3000/'; 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};



@Injectable(
  {
  providedIn: 'root'
}
)
export class UserService {

  constructor(private http: HttpClient, private router : Router) { }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  public login (user : UserInfoModel): Observable<any> {
    const base = this.http.post('/register', user)
    const request = base.pipe(
      map((user : UserInfoModel ) => {
        return user
      })
    )
    return request
  }

  public signin(user : UserInfoModel) : Observable<any>{
    const base = this.http.post('/login', user)
    const request = base.pipe(
      map((user : UserInfoModel ) => {
        return user
      })
    )
    return request
  }


}