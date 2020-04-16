import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { UserInfoModel } from '../models/UserInfoModel';
import { Router } from '@angular/router';

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

  

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
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

  connectUser(){
    let user = new UserInfoModel()
    user.email = this.loginForm.get("email").value,
    user.pseudo = this.loginForm.get("pseudo").value,
    user.mdp = this.loginForm.get("mdp").value
    
    this.userService.signin(user).subscribe(
      () => {
        this.router.navigateByUrl('/')
      },
      err => {
        alert(err)
      }
    );
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