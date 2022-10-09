import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopingCardPageComponent } from './shoping-card-page/shoping-card-page.component';
import { ShopingCheckoutComponent } from './shoping-checkout/shoping-checkout.component';



@NgModule({
  declarations: [
    ShopingCardPageComponent,
    ShopingCheckoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShoppingCardModule { }
