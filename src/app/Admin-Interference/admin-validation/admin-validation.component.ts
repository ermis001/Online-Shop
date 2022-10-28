import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validator, Validators, ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  selector: 'app-admin-validation',
  templateUrl: './admin-validation.component.html',
  styleUrls: ['./admin-validation.component.scss'],
})
export class AdminValidationComponent implements OnInit {
  constructor(private router: Router) {}
   logInForm!:FormGroup
   error:boolean = false
  


  ngOnInit(): void {
    this.reactiveForm()
  }
  reactiveForm(){
    this.logInForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }


  logOn() {
   
    let formData = this.logInForm.value
    if (formData.username === 'admin' && formData.password === 'admin01') {
      this.router.navigate(['admin/app-product-list']);
    } else {
      this.error= true
    }
    
  }
 
}
