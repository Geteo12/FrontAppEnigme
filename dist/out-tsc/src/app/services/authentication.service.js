import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let AuthenticationService = class AuthenticationService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    saveToken(token) {
        localStorage.setItem('usertoken', token);
        this.token = token;
    }
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem('usertoken');
        }
        return this.token;
    }
    getUserDetails() {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    }
    isLoggedIn() {
        const user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    }
    register(user) {
        return this.http.post(`/register`, user);
    }
    login(user) {
        const base = this.http.post(`/login`, user);
        const request = base.pipe(map((data) => {
            if (data.token) {
                this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    }
    profile() {
        return this.http.get(`/users/profile`, {
            headers: { Authorization: ` ${this.getToken()}` }
        });
    }
    logout() {
        this.token = '';
        window.localStorage.removeItem('usertoken');
        this.router.navigateByUrl('/');
    }
};
AuthenticationService = __decorate([
    Injectable()
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map