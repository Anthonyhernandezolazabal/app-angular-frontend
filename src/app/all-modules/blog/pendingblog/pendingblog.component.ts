import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Feather from 'feather-icons';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pendingblog',
  templateUrl: './pendingblog.component.html',
  styleUrls: ['./pendingblog.component.css']
})
export class PendingblogComponent implements OnInit {
  blogs: any = [];
  constructor( public router: Router, private dataservice: DataService) {
    this.dataservice.ManageUsers.subscribe((data) => {
      this.blogs = data
    })
   }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    Feather.replace();
  }

}
