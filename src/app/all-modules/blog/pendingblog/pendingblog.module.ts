import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingblogRoutingModule } from './pendingblog-routing.module';
import { PendingblogComponent } from './pendingblog.component';


@NgModule({
  declarations: [
    PendingblogComponent
  ],
  imports: [
    CommonModule,
    PendingblogRoutingModule
  ]
})
export class PendingblogModule { }
