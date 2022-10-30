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

boll=false;
toggleIm() {
  this.boll= !this.boll
}




}


