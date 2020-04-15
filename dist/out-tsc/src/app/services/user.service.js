import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
const baseUrl = 'http://localhost:3000/';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'x-www-form-urlencoded'
    })
};
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.configUrl = '../../assets/proxy.conf.json';
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
    ;
    create(data) {
        const donnees = data;
        alert("BEFORE POST: " + donnees.mdp);
        this.http.post('http://localhost:3000/register/', data, httpOptions)
            .subscribe((response) => alert("IN POST, RESPONSE: " + data.mdp), (error) => alert(error));
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map