import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBlogsRoutingModule } from './edit-blogs-routing.module';
import { EditBlogsComponent } from './edit-blogs.component';
import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [
    EditBlogsComponent
  ],
  imports: [
    CommonModule,
    EditBlogsRoutingModule,
    TagInputModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule
  ]
})
export class EditBlogsModule { }
