import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-edit-blogs',
  templateUrl: './edit-blogs.component.html',
  styleUrls: ['./edit-blogs.component.css']
})
export class EditBlogsComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { 
    
  }
  ngOnInit(): void {
  }
  tag = ['Valve profit'];
}
