import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopingPageComponent } from './shoping-page/shoping-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ShopingPageComponent
  ],
  exports: [ShopingPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ShoppingModule { }
