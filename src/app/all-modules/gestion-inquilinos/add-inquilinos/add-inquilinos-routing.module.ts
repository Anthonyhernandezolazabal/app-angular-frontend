import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddInquilinosComponent } from './add-inquilinos.component';

const routes: Routes = [
	{
		path : '',
		component : AddInquilinosComponent
	}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddInquilinosRoutingModule { }
