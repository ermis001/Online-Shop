import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor( private route: ActivatedRoute, private productService: ProductService) {}

  idOfProduct: any;
  addBoolean:boolean = true

  ngOnInit(): void {
    this.reactiveFormProduct();
    this.idOfProduct = +this.route.snapshot.params['id'];
    this.getProductById();
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
    this.productService.addProduct(formData).subscribe(() => {});
 
  }

  getProductById() {
    this.productService.getProductById(this.idOfProduct).subscribe((result) => {
      this.productForm.setValue(result);
    });
  }

  updateProduct() {
    let formData = this.productForm.value;
    this.productService.updateProduct(this.idOfProduct, formData).subscribe(() => {});
    
  }

  
}
