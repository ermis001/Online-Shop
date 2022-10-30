import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/Interfaces/product-interface';
import { CategoryInterface } from 'src/app/Interfaces/category-interface';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-shoping-page',
  templateUrl: './shoping-page.component.html',
  styleUrls: ['./shoping-page.component.scss']
})
export class ShopingPageComponent implements OnInit {
  listOfProducts: ProductInterface[]=[];
  listOfCategories: CategoryInterface[]= [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {   }

  ngOnInit(): void {
    this.getListOfProducts();
    this.getListOfCategories();
  }


  getListOfProducts() {
    this.productService.getProducts().subscribe((result)=> {
      this.listOfProducts = result;
    })};

  getListOfCategories(){
    this.categoryService.getCategory().subscribe((result)=> {
      this.listOfCategories = result;
    })};

    somefunction(){
      console.log('cimi');
    }
}
