import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
const baseUrl = 'http://localhost:3000/';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
let UserService = class UserService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
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
    register(compte) {
        const base = this.http.post('/register', compte);
        const request = base.pipe(map((compte) => {
            return compte;
        }));
        return request;
    }
    signin(compte) {
        const base = this.http.post('/login', compte);
        const request = base.pipe(map((compte) => {
            return compte;
        }));
        return request;
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map