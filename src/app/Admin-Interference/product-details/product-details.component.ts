import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private builder:FormBuilder) { }

  productForm:any
  ngOnInit(): void {

    this.productForm= this.builder.group(
      {
        categoryId: [null, Validators.required],
        name: [null, Validators.required],
        image: [null, Validators.required],
        description: [null, Validators.required],
        price: [null, Validators.required]
      }
    ) 
  }

  add(){
    this.productForm.markAllAsTouched()
    console.log(this.productForm.value)
  }

}
