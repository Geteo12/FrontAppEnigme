import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
const baseUrl = 'http://localhost:4201';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    create(data) {
        return this.http.post(baseUrl, data);
    }
    test() {
        return console.log("ON EST DANS LE USERSERVICE");
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map