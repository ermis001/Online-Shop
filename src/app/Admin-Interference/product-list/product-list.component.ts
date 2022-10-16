import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  data:any[]=[
    {id:1,name:'Pants',category:'Clothing',price:12.99 },
    {id:2,name:'T-shirt',category:'Men Clothing',price:16.99},
    {id:3,name:'Shoes',category:'Mens Sports Wears',price:13.99},
    {id:1,name:'Pants',category:'Clothing',price:12.99 },
    {id:2,name:'T-shirt',category:'Men Clothing',price:16.99},
    {id:3,name:'Shoes',category:'Mens Sports Wears',price:13.99},
  ]
   
  constructor() { }

  ngOnInit(): void {
  }

}
