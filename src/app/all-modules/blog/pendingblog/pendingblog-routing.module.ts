import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingblogComponent } from './pendingblog.component';

const routes: Routes = [{ path: '', component: PendingblogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingblogRoutingModule { }
