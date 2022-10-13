import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-card-page',
  templateUrl: './shoping-card-page.component.html',
  styleUrls: ['./shoping-card-page.component.scss']
})
export class ShopingCardPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

bol=false;
toggleImage() {
  this.bol= !this.bol
}

  
boll=false;
toggleIm() {
  this.boll= !this.boll
}




}


