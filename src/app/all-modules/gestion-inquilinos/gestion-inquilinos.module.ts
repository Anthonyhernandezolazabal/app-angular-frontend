import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GestionInquilinosComponent } from './gestion-inquilinos.component';
import { RegistrosInquilinosComponent } from './registros-inquilinos/registros-inquilinos.component';
import { GestionInquilinosRoutingModule } from './gestion-inquilinos.routing.module';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [ GestionInquilinosComponent,RegistrosInquilinosComponent],
  imports: [CommonModule, GestionInquilinosRoutingModule, RouterModule,ReactiveFormsModule,FormsModule,DataTablesModule],
})

export class GestionInquilinosModule {}
