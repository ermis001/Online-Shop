import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  data: any;
  productTable: any;
  categoriesTable:any;

  constructor(private categoryService:CategoryService, private productService: ProductService) {}

  ngOnInit(): void {
    this.getProduct();
    this.getCategories();
  }

  getProduct() {
    this.productService.getProducts().subscribe((result) => {
      this.productTable = result;
    });
  }

  getCategories(){
    this.categoryService.getCategory().subscribe((result) => {
      this.categoriesTable = result
    })
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.getProduct();
    });
  }

  deleteCategory(id: number){
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.getCategories()
    })
  }
  
}
