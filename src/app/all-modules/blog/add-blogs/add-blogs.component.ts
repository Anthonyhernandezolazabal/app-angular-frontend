import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.css']
})

export class AddBlogsComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { 
    
  }
  ngOnInit(): void {
  }
  tag = ['Valve profit'];
  


  
 
}
