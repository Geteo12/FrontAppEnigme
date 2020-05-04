import { Component, OnInit } from '@angular/core';
import { UserDetails, AuthenticationService } from '../services/authentication.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss']
})
export class MonCompteComponent implements OnInit {

  details : UserDetails

  users = {
    email: '',
    pseudo: '',
    mdp: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.auth.getUser().subscribe(
      user => {
        this.details = user
      },
      err => {
        console.error(err)
      }
    );
  }

  public modifMdp(data){
    this.users.email = this.details.email
    this.users.pseudo = this.details.pseudo
    if (data == ""){
      document.getElementById("alert").setAttribute("style", "visibility: visible");
    }
    else {
      this.auth.modifUtilisateur(this.users).subscribe(
        response => {
          console.log(response);
          document.location.reload()
        },
        err => {
          console.error(err)
        }
      );
  }

  }

  public modifPseudo(data){
    this.users.email = this.details.email
    this.users.mdp = this.details.mdp
    if(data == ""){
      document.getElementById("alert").setAttribute("style", "visibility: visible");
    }
    else{
      this.auth.modifUtilisateur(this.users).subscribe(
        response => {
          console.log(response);
          document.location.reload()
        },
        err => {
          console.error(err)
        }
      );
    }
  }

  public affichageModifPseudo(){
    document.getElementById("pseudo").setAttribute("style", "visibility: visible");
    document.getElementById("pseudoChangeAnnuler").setAttribute("style", "visibility: visible");
    document.getElementById("pseudoChangeValider").setAttribute("style", "visibility: visible");
  }

  public affichageModifMdp(){
    document.getElementById("mdp").setAttribute("style", "visibility: visible");
    document.getElementById("mdpChangeAnnuler").setAttribute("style", "visibility: visible");
    document.getElementById("mdpChangeValider").setAttribute("style", "visibility: visible");
  }

  public annulerModifPseudo(){
    document.getElementById("pseudo").setAttribute("style", "visibility: hidden");
    document.getElementById("pseudoChangeAnnuler").setAttribute("style", "visibility: hidden");
    document.getElementById("pseudoChangeValider").setAttribute("style", "visibility: hidden");
  }

  public annulerModifMdp(){
    document.getElementById("mdp").setAttribute("style", "visibility: hidden");
    document.getElementById("mdpChangeAnnuler").setAttribute("style", "visibility: hidden");
    document.getElementById("mdpChangeValider").setAttribute("style", "visibility: hidden");
  }

  public closeAlert(){
    document.getElementById("alert").setAttribute("style", "visibility: hidden");
  }
  
}
