import { Component, OnInit } from '@angular/core';
import { AllModulesService } from 'src/app/services/all-modules.service';

@Component({
  selector: 'app-registros-inquilinos',
  templateUrl: './registros-inquilinos.component.html',
  styleUrls: ['./registros-inquilinos.component.css']
})
export class RegistrosInquilinosComponent implements OnInit {
  public customers: any = [];
  public tempId: any;
  url: any = 'customers';

  constructor(private examples: AllModulesService) { }

  ngOnInit(): void {
    this.getCustomers();
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

}
