import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionInquilinosComponent } from './gestion-inquilinos.component';
import { RegistrosInquilinosComponent } from './registros-inquilinos/registros-inquilinos.component';



const routes: Routes = [
  {
    path: '',
    component: GestionInquilinosComponent,
    children:[
      { path: "registros-inquilinos",component: RegistrosInquilinosComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionInquilinosRoutingModule{}
