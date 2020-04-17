import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthGuardService = class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    }
};
AuthGuardService = __decorate([
    Injectable()
], AuthGuardService);
export { AuthGuardService };
//# sourceMappingURL=authguard.service.js.map