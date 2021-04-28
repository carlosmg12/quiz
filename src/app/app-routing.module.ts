import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "../app/components/home/home.component";
import { CrearComponent } from "../app/components/crear/crear.component"

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"crear",component:CrearComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
