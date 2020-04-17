import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { CompteModel } from '../models/CompteModel';
let ConnexionUtilisateurComponent = class ConnexionUtilisateurComponent {
    constructor(fb, userService, router, auth) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.auth = auth;
        this.registered = false;
        this.submitted = false;
        this.credentials = {
            id: 0,
            pseudo: '',
            email: '',
            mdp: ''
        };
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
    //Ne fonctionne pas
    connectUser() {
        let compte = new CompteModel();
        compte.email = this.loginForm.get("email").value,
            compte.pseudo = this.loginForm.get("pseudo").value,
            compte.mdp = this.loginForm.get("mdp").value;
        this.userService.signin(compte).subscribe(() => {
            this.router.navigateByUrl('/');
        }, err => {
            alert(err);
        });
    }
    login() {
        this.auth.login(this.credentials).subscribe(() => {
            this.router.navigateByUrl('/home');
        }, err => {
            console.error(err);
        });
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
ConnexionUtilisateurComponent = __decorate([
    Component({
        selector: 'app-connexion-utilisateur',
        templateUrl: './connexion-utilisateur.component.html',
        styleUrls: ['./connexion-utilisateur.component.css']
    })
], ConnexionUtilisateurComponent);
export { ConnexionUtilisateurComponent };
//# sourceMappingURL=connexion-utilisateur.component.js.map