import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrosInquilinosComponent } from './registros-inquilinos.component';

const routes: Routes = [
  {path:'',
component:RegistrosInquilinosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrosInquilinosRoutingModule { }
