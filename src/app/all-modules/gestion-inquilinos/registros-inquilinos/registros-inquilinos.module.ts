import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrosInquilinosRoutingModule } from './registros-inquilinos-routing.module';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegistrosInquilinosRoutingModule,ReactiveFormsModule,FormsModule,
    DataTablesModule
  ]
})

export class ResgistrosInquilinosModule { }
