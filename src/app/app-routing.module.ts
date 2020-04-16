import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnigmeComponent } from './enigme/enigme.component';


const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'enigme', component: EnigmeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
