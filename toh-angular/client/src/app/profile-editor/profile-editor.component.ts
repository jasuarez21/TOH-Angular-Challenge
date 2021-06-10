import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  id = new FormControl('sdsdsds')
  name = new FormControl('sdsdsds')

  constructor() { }

  ngOnInit(): void {
  }

}
