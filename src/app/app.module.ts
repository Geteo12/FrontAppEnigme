import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreationUtilisateurComponent } from './creation-utilisateur/creation-utilisateur.component';
import { ConnexionUtilisateurComponent } from './connexion-utilisateur/connexion-utilisateur.component';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service'
import { AuthGuardService } from './services/authguard.service';
import { AccueilComponent } from './accueil/accueil.component'
import { EnigmeComponent } from './enigme/enigme.component'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CreationUtilisateurComponent,
    ConnexionUtilisateurComponent,
    AccueilComponent,
    EnigmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
