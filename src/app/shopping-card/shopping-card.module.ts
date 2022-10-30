import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopingCardPageComponent } from './shoping-card-page/shoping-card-page.component';
import { RouterModule } from '@angular/router';
import { ShopingCheckoutComponent } from './shoping-checkout/shoping-checkout.component';



@NgModule({
  declarations: [
    ShopingCardPageComponent,
    ShopingCheckoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'checkout',component:ShopingCheckoutComponent
      },
      
    ])
  ],
  exports:[ShopingCardPageComponent, ShopingCheckoutComponent]
})
export class ShoppingCardModule { }
