import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { CompteModel } from '../models/CompteModel';
let CreationUtilisateurComponent = class CreationUtilisateurComponent {
    constructor(fb, userService, router, auth) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.auth = auth;
        this.registered = false;
        this.submitted = false;
        this.users = {
            email: '',
            pseudo: '',
            mdp: ''
        };
        this.credentials = {
            id: 0,
            pseudo: "",
            email: "",
            mdp: ""
        };
    }
    invalidPseudo() {
        return (this.submitted && this.loginForm.controls.pseudo.errors != null); // ==?
    }
    invalidMail() {
        return (this.submitted && this.loginForm.controls.email.errors != null);
    }
    invalidMdp() {
        return (this.submitted && this.loginForm.controls.mdp.errors != null);
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            pseudo: ['', Validators.required],
            mdp: ['', Validators.required],
        });
    }
    registerUser() {
        let user = new CompteModel();
        user.email = this.loginForm.get("email").value,
            user.pseudo = this.loginForm.get("pseudo").value,
            user.mdp = this.loginForm.get("mdp").value;
        this.userService.register(user).subscribe(() => {
            this.router.navigateByUrl('/login');
        }, err => {
            alert(err);
            this.router.navigateByUrl('/');
        });
    }
    register() {
        this.auth.register(this.credentials).subscribe(() => {
            this.router.navigateByUrl("/login");
        }, err => {
            console.error(err);
        });
    }
    newUser() {
        this.users = {
            email: '',
            pseudo: '',
            mdp: ''
        };
    }
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid == true) {
            return;
        }
        else {
            this.registered = true;
        }
    }
};
CreationUtilisateurComponent = __decorate([
    Component({
        selector: 'app-creation-utilisateur',
        templateUrl: './creation-utilisateur.component.html',
        styleUrls: ['./creation-utilisateur.component.css']
    })
], CreationUtilisateurComponent);
export { CreationUtilisateurComponent };
//# sourceMappingURL=creation-utilisateur.component.js.map