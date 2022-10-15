import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Admin-Interference/product-details/product-details.component';
import { ShopingCardPageComponent } from './shopping-card/shoping-card-page/shoping-card-page.component';

const routes: Routes = [
  {}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
