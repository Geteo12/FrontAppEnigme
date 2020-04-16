import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Config } from 'protractor';
import { UserInfoModel } from '../models/UserInfoModel';
import { Router } from '@angular/router';

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

  loginForm: FormGroup;

  

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
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

  saveUser(){
    let user = new UserInfoModel()
    user.email = this.loginForm.get("email").value,
    user.pseudo = this.loginForm.get("pseudo").value,
    user.mdp = this.loginForm.get("mdp").value
    
    this.userService.login(user).subscribe(
      () => {
        this.router.navigateByUrl('/login')
      },
      err => {
        alert(err)
        this.router.navigateByUrl('/')
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