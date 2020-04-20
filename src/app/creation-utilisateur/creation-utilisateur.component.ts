import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Config } from 'protractor';
import { CompteModel } from '../models/CompteModel';
import { Router } from '@angular/router';
import { TokenPayload, AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-creation-utilisateur',
  templateUrl: './creation-utilisateur.component.html',
  styleUrls: ['./creation-utilisateur.component.css']
})

export class CreationUtilisateurComponent implements OnInit {
  
  registered=false;
  submitted = false;

  users = {
    email: '',
    pseudo: '',
    mdp: ''
  };

  credentials: TokenPayload = {
    id: 0,
    pseudo: "",
    email: "",
    mdp: ""
  };

  loginForm: FormGroup;

  

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private auth: AuthenticationService) {
   }

   invalidPseudo()
   {
     return (this.submitted && this.loginForm.controls.pseudo.errors != null); // ==?
   }
 
   invalidMail()
   {
     return (this.submitted && this.loginForm.controls.email.errors != null);
   }
 
   invalidMdp()
   {
     return (this.submitted && this.loginForm.controls.mdp.errors != null);
   }
 

  ngOnInit(): void {
    this.loginForm = this.fb.group({  // Crée une instance de FormGroup
      email:['', Validators.required], //, Validators.email
      pseudo: ['', Validators.required],                   // Crée une instance de FormControl
      mdp: ['', Validators.required],     //, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')              // Crée une instance de FormControl
    });
    
  }

  /*
  registerUser(){
    let user = new CompteModel()
    user.email = this.loginForm.get("email").value,
    user.pseudo = this.loginForm.get("pseudo").value,
    user.mdp = this.loginForm.get("mdp").value
    
    this.userService.register(user).subscribe(
      () => {
        this.router.navigateByUrl('/login')
      },
      err => {
        alert(err)
        this.router.navigateByUrl('/')
      }
    );
  }
  */

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl("/login");
      },
      err => {
        console.error(err);
      }
    );
  }

  newUser() {
    this.users = {
      email: '',
      pseudo: '',
      mdp: ''
    };
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