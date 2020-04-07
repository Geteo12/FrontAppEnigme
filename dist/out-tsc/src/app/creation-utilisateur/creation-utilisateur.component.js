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
            email: ['', Validators.required, Validators.email],
            pseudo: ['', Validators.required],
            mdp: ['', Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')],
        });
    }
    saveUser() {
        const data = {
            email: this.users.email,
            pseudo: this.users.pseudo,
            mdp: this.users.mdp
        };
        this.userService.create(data)
            .subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    test() {
        this.userService.test();
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