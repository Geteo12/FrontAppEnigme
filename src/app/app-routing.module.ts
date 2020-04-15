import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationUtilisateurComponent } from './creation-utilisateur/creation-utilisateur.component'
import { ConnexionUtilisateurComponent } from './connexion-utilisateur/connexion-utilisateur.component'

const routes: Routes = [
{path: '', redirectTo: '', pathMatch: 'full'},
{path: 'register', component: CreationUtilisateurComponent },
{path: 'login', component: ConnexionUtilisateurComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
