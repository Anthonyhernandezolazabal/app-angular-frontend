import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Feather from 'feather-icons';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {
  blogs: any = [];
  constructor( public router: Router, private dataservice: DataService) {
    this.dataservice.ManageUsers.subscribe((data) => {
      this.blogs = data
    })
   }
  ngAfterViewInit() {
    Feather.replace();
  }


  ngOnInit(): void {
  }

}
