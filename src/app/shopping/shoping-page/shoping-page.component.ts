import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shoping-page',
  templateUrl: './shoping-page.component.html',
  styleUrls: ['./shoping-page.component.scss']
})
export class ShopingPageComponent implements OnInit {

  constructor(private productService:ProductService) { }
  allProducts:any[]=[];
  ngOnInit(): void {
    this.getProducts()
  }
  
  getProducts(){
    this.productService.getProducts().subscribe((result) => {
        this.allProducts=result
        console.log(result);
        console.log(this.allProducts);
        
    } )
  }

}
