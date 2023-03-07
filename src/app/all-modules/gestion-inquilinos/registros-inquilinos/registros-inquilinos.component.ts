import { Component, OnInit } from '@angular/core';
import { AllModulesService } from 'src/app/services/all-modules.service';
import { Inquilinos } from 'src/app/model/inquilinos';
import { InquilinosService } from 'src/app/services/inquilinos.service';
import Swal from 'sweetalert2';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-registros-inquilinos',
  templateUrl: './registros-inquilinos.component.html',
  styleUrls: ['./registros-inquilinos.component.css']
})
export class RegistrosInquilinosComponent implements OnInit {
  public inquilino:Inquilinos[];
  public customers: any = [];
  public tempId: any;
  url: any = 'customers';

  constructor(private examples: AllModulesService, private inquilinos: InquilinosService) { }

  ngOnInit(): void {
    this.getCustomers();
    this.getInquilinos();
  }
  filter() {}
  getCustomers(){
    this.customers = this.examples.customers;
  }
  deleteCustomer() {
    this.examples.delete(this.tempId, this.url).subscribe((data) => {
      this.getCustomers();
    });
  }

  getInquilinos(){
    this.inquilinos.getInquilinos().subscribe((data) => {
      this.inquilino = data;
      console.log(this.inquilino)
    })
  }

  deleteInquilino(id,nombre) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Eliminar a '+nombre+'?',
      text: "No se podrá reverti esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.inquilinos.delInquilino(id).subscribe(data=>{

          alertifyjs.success('¡Se a eliminado a '+nombre+'!')
          this.getInquilinos();

        },error => alertifyjs.error('¡Error al eliminar!') )

      }
    })
  }

}
