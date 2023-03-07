import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddInquilinosRoutingModule } from './add-inquilinos-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddInquilinosRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AddInquilinosModule { }
