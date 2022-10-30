import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.scss']
})
export class AboutProductComponent implements OnInit {
   product:any;
  idOfProduct:any;

  oneStar:any;
  twoStar:any;
  threeStar:any;
  fourStar:any;
  fiveStar:any;

   

  constructor(private productService:ProductService, private route:ActivatedRoute) { }
   
  ngOnInit(): void {
   this.idOfProduct = +this.route.snapshot.params['id']
   this.getProductById()
  }


 getProductById(){
  this.productService.getProductById(this.idOfProduct).subscribe((result) => {
    this.product = result
  })
 }
}
