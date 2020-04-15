import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let ConnexionUtilisateurComponent = class ConnexionUtilisateurComponent {
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
    invalidMdp() {
        return (this.submitted && this.loginForm.controls.mdp.errors != null);
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            pseudo: ['', Validators.required],
            mdp: ['', Validators.required],
        });
    }
    saveUser() { }
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
ConnexionUtilisateurComponent = __decorate([
    Component({
        selector: 'app-connexion-utilisateur',
        templateUrl: './connexion-utilisateur.component.html',
        styleUrls: ['./connexion-utilisateur.component.css']
    })
], ConnexionUtilisateurComponent);
export { ConnexionUtilisateurComponent };
//# sourceMappingURL=connexion-utilisateur.component.js.map