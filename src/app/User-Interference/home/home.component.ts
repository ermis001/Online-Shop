import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( 
    private productService: ProductService,
    private route: Router) { }

  ngOnInit(): void {
  }

  categoryClick(value:string) {
    this.productService.categoriesValue = value;
    this.route.navigate(['app-shoping-page'])
  }

}
