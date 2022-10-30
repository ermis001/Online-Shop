import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { RatingService } from 'src/app/services/rating.service';


@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.scss']
})
export class AboutProductComponent implements OnInit {
  product:any;
  idOfProduct:any;
  star:any;


   

  constructor(private productService:ProductService, private route:ActivatedRoute,private ratingService:RatingService) { }
   
  ngOnInit(): void {
   this.idOfProduct = +this.route.snapshot.params['id']
   this.getProductById()
  }


 getProductById(){
  this.productService.getProductById(this.idOfProduct).subscribe((result) => {
    this.product = result
  })
 }

addRating(){
  this.ratingService.addRating(this.star).subscribe(() => {
    console.log(this.star);
    
  })
}
 
}
