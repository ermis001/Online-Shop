import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private router:Router, private route: ActivatedRoute, private addProd: ProductService) {}

  idOfProduct: any;
  addBoolean:boolean = true

  ngOnInit(): void {
    this.reactiveFormProduct();
    this.idOfProduct = +this.route.snapshot.params['id'];
    this.getProductById();
    console.log(this.idOfProduct);
    console.log(typeof this.idOfProduct);
    console.log(this.productForm);
    
    
  }
  
  productForm!: FormGroup;


  reactiveFormProduct() {
    this.productForm = new FormGroup({
      id: new FormControl({ value: null, disabled: true }, Validators.required),
      categoryId: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });
  }

  addProduct() {
    this.productForm.markAllAsTouched();
    let formData = this.productForm.value;
    this.addProd.addProduct(formData).subscribe(() => {});
 
  }

  getProductById() {
    this.addProd.getProductById(this.idOfProduct).subscribe((result) => {
      this.productForm.setValue(result);
    });
  }

  updateProduct() {
    let formData = this.productForm.value;
    this.addProd.updateProduct(this.idOfProduct, formData).subscribe(() => {});
    
  }

  
}
