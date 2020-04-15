import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const baseUrl = 'http://localhost:3000/'; 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'x-www-form-urlencoded'
  })
};



@Injectable(
  {
  providedIn: 'root'
}
)
export class UserService {

  constructor(private http: HttpClient) { }

  configUrl = '../../assets/proxy.conf.json'

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

  create(data) {
    const donnees = data
    alert("BEFORE POST: "+donnees.mdp)
    this.http.post('http://localhost:4200/api/register/', data, httpOptions)
    .subscribe(
      (response) => alert("IN POST, RESPONSE: "+data.mdp),
      (error) => alert(error)
    )
  }

}