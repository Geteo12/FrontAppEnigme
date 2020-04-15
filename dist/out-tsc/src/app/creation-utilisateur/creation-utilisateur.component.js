import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let CreationUtilisateurComponent = class CreationUtilisateurComponent {
    constructor(fb, userService) {
        this.fb = fb;
        this.userService = userService;
        this.registered = false;
        this.submitted = false;
        this.users = {
            email: '',
            pseudo: '',
            mdp: ''
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
    saveUser() {
        const data = {
            email: this.loginForm.get("email").value,
            pseudo: this.loginForm.get("pseudo").value,
            mdp: this.loginForm.get("mdp").value
        };
        alert("EMAIL: " + data.email);
        this.userService.create(data);
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