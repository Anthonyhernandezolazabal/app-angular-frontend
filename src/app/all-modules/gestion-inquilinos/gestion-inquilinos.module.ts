import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionInquilinosComponent } from './gestion-inquilinos.component';

const routes: Routes = [{ path: '', component: GestionInquilinosComponent }]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GestionInquilinosModule {}
