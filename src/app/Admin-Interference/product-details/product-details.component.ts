import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private builder:FormBuilder) { }

  productForm!:FormGroup
  ngOnInit(): void {

    this.productForm = new FormGroup(
      {
        categoryId: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        image: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required)
      }
    ) 
  }

  add(){
    this.productForm.markAllAsTouched()
    console.log(this.productForm.value)
  }

}
