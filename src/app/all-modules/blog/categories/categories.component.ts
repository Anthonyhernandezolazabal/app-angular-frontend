import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { AllModulesService } from 'src/app/services/all-modules.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories: any = [];
  constructor(private srvModuleService: AllModulesService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  tag = ['Valve profit'];
  tags = ['profit'];
  service = ['Valve profit'];
  services = ['Sales'];
  ngAfterViewInit() {
    Feather.replace();
  }

  getCategories() {
    this.categories = this.srvModuleService.categories;
  }
  filter() {}
}
