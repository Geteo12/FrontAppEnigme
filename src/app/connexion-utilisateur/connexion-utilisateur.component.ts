import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-connexion-utilisateur',
  templateUrl: './connexion-utilisateur.component.html',
  styleUrls: ['./connexion-utilisateur.component.css']
})

export class ConnexionUtilisateurComponent implements OnInit {
  
  registered=false;
  submitted = false;

  users = {
    email: '',
    pseudo: '',
    mdp: ''
  };

  loginForm: FormGroup;

  

  constructor(private fb: FormBuilder, private userService: UserService) {
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

  saveUser(){}


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