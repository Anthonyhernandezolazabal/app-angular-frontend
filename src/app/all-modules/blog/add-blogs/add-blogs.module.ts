import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBlogsRoutingModule } from './add-blogs-routing.module';
import { AddBlogsComponent } from './add-blogs.component';
import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';







@NgModule({
  declarations: [
    AddBlogsComponent
  ],
  imports: [
    CommonModule,
    AddBlogsRoutingModule,
    TagInputModule,
    CKEditorModule,
    FormsModule
  ]
})
export class AddBlogsModule { }
