import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationUtilisateurComponent } from './creation-utilisateur/creation-utilisateur.component'
import { ConnexionUtilisateurComponent } from './connexion-utilisateur/connexion-utilisateur.component'
import { AccueilComponent } from './accueil/accueil.component'

const routes: Routes = [
{path: '', redirectTo: '', pathMatch: 'full'},
{path: 'register', component: CreationUtilisateurComponent },
{path: 'login', component: ConnexionUtilisateurComponent },
{path: 'home', component: AccueilComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
