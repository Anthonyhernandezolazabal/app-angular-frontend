import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SweetalertsRoutingModule } from './sweetalerts-routing.module';
import { SweetalertsComponent } from './sweetalerts.component';
import Swal from 'sweetalert2';



@NgModule({
  declarations: [
    SweetalertsComponent
  ],
  imports: [
    CommonModule,
    SweetalertsRoutingModule,
  
    
  ]
})
export class SweetalertsModule { }
