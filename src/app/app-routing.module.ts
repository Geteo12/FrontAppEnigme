import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationUtilisateurComponent } from './creation-utilisateur/creation-utilisateur.component'
import { ConnexionUtilisateurComponent } from './connexion-utilisateur/connexion-utilisateur.component'
import { AccueilComponent } from './accueil/accueil.component'
import { MonCompteComponent } from './mon-compte/mon-compte.component'
import { EnigmeComponent } from './enigme/enigme.component'


const routes: Routes = [
{path: '', redirectTo: '', pathMatch: 'full'},
{path: 'register', component: CreationUtilisateurComponent },
{path: 'login', component: ConnexionUtilisateurComponent },
{path: 'home', component: AccueilComponent },
{path: 'monCompte', component: MonCompteComponent}
{path: 'enigme', component: EnigmeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
