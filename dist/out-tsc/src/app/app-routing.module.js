import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreationUtilisateurComponent } from './creation-utilisateur/creation-utilisateur.component';
import { ConnexionUtilisateurComponent } from './connexion-utilisateur/connexion-utilisateur.component';
const routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'register', component: CreationUtilisateurComponent },
    { path: 'login', component: ConnexionUtilisateurComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map