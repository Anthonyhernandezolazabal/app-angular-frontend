import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GestionInquilinosComponent } from './gestion-inquilinos.component';
import { RegistrosInquilinosComponent } from './registros-inquilinos/registros-inquilinos.component';
import { GestionInquilinosRoutingModule } from './gestion-inquilinos-routing.module';
import { DataTablesModule } from "angular-datatables";
import { AddInquilinosComponent } from './add-inquilinos/add-inquilinos.component';
import {WebcamModule} from 'ngx-webcam';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [ GestionInquilinosComponent,RegistrosInquilinosComponent,AddInquilinosComponent],
  imports: [CommonModule, GestionInquilinosRoutingModule, RouterModule,ReactiveFormsModule,FormsModule,DataTablesModule,WebcamModule,HttpClientModule],
})

export class GestionInquilinosModule {}
