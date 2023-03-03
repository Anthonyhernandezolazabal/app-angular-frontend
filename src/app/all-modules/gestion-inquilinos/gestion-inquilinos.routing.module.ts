import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GestionInquilinosComponent } from './gestion-inquilinos.component';
import { AuthenticationGuard } from 'src/app/core/auth/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: GestionInquilinosComponent,
    canActivate: [AuthenticationGuard],
    children:[
      { path: "registros-inquilinos" }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionInquilinosRoutingModule{}
