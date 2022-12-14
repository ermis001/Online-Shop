import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-shoping-page',
  templateUrl: './shoping-page.component.html',
  styleUrls: ['./shoping-page.component.scss']
})
export class ShopingPageComponent implements OnInit {

  constructor(private productService:ProductService, private categories:CategoryService) { }
  allProducts:any[]=[];
  allCategories:any[]=[];
  categoriesValue:string = this.productService.categoriesValue;
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  
    
  }
  
  getProducts(){
    this.productService.getProducts().subscribe((result) => {
        this.allProducts=result
       
        
    } )
  }

  getCategories(){
    this.categories.getCategory().subscribe((result) => {
        this.allCategories= result
    })
  }

}
