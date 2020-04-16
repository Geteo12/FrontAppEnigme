import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enigme',
  templateUrl: './enigme.component.html',
  styleUrls: ['./enigme.component.css']
})
export class EnigmeComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Show';

  constructor() { }

  ngOnInit(): void {
  }

  appear(){
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

}
