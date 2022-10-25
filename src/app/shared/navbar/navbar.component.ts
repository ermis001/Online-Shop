import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private formBuilder: FormBuilder) { }
  employeeForm:any = FormGroup;


  bool:Boolean=true

  ngOnInit(): void {
    
  }



}
