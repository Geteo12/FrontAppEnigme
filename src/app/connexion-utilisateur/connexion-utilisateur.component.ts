import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { CompteModel } from '../models/CompteModel';
import { Router } from '@angular/router';
import { TokenPayload, AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-connexion-utilisateur',
  templateUrl: './connexion-utilisateur.component.html',
  styleUrls: ['./connexion-utilisateur.component.css']
})

export class ConnexionUtilisateurComponent implements OnInit {
  
  registered=false;
  submitted = false;

  credentials: TokenPayload = {
    id: 0,
    pseudo: '',
    email: '',
    mdp: ''
  }

  users = {
    email: '',
    pseudo: '',
    mdp: ''
  };

  loginForm: FormGroup;

  

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private auth : AuthenticationService) {
   }

   invalidPseudo()
   {
     return (this.submitted && this.loginForm.controls.pseudo.errors != null); // ==?
   }
 
   invalidMdp()
   {
     return (this.submitted && this.loginForm.controls.mdp.errors != null);
   }
 

  ngOnInit(): void {
    this.loginForm = this.fb.group({  // Crée une instance de FormGroup
      pseudo: ['', Validators.required],                   // Crée une instance de FormControl
      mdp: ['', Validators.required],     //, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')              // Crée une instance de FormControl
    });
    
  }

  //Ne fonctionne pas
  connectUser(){
    let compte = new CompteModel()
    compte.email = this.loginForm.get("email").value,
    compte.pseudo = this.loginForm.get("pseudo").value,
    compte.mdp = this.loginForm.get("mdp").value
    
    this.userService.signin(compte).subscribe(
      () => {
        this.router.navigateByUrl('/')
      },
      err => {
        alert(err)
      }
    );
  }

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/home')
      },
      err => {
        console.error(err)
      }
    )
  }


  onSubmit(){
    this.submitted=true;

    if(this.loginForm.invalid == true){
      return;
    }
    else{
      this.registered = true;
    }
  }

}