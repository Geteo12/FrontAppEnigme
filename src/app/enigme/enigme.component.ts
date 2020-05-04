import { Component, OnInit } from '@angular/core';
import { AuthenticationService, EnigmeDetails, IndiceDetails } from '../services/authentication.service';
import { FormBuilder, Form, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enigme',
  templateUrl: './enigme.component.html',
  styleUrls: ['./enigme.component.css']
})
export class EnigmeComponent implements OnInit {
  
  details: EnigmeDetails

  indices : any

  indiceTab : Array<IndiceDetails>

  reponse : String
  reponseForm : FormGroup


  constructor(private auth: AuthenticationService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.reponseForm = this.fb.group({
      reponse: '',
    });
    this.auth.getEnigme().subscribe(
      enigme => {
        this.details = enigme
      },
      err => {
        console.error(err)
      }
    );
    this.auth.getIndice().subscribe(
      data => {
        this.indiceTab = data
      },
      err => {
        console.error(err)
      }
    );
  }

  verifReponse(){
    const value = this.reponseForm.value['reponse'];
    if(value == this.details.reponse){
      alert("Félicitations, vous avez trouvez la bonne réponse et vous marquez "+this.details.points+" points!")
      this.router.navigateByUrl('/home')
    }
    else{
      alert("Mauvaise Réponse, Réessayez!")

    }
  }
  


}
