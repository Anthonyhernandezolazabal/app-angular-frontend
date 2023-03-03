import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    TagInputModule,
    FormsModule,
    DataTablesModule
    
  ]
})
export class CategoriesModule { }
