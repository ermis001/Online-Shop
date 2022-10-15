import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AboutProductComponent } from './User-Interference/about-product/about-product.component';
import { AboutUsComponent } from './User-Interference/about-us/about-us.component';
import { SharedModule } from './shared/shared.module';
import { ShoppingCardModule } from './shopping-card/shopping-card.module';
import { ShoppingModule } from './shopping/shopping.module';
import { SdaHttpClientModule } from './data-layer/sda-be-mock.module';
import { ProductListComponent } from './Admin-Interference/product-list/product-list.component';
import { ProductDetailsComponent } from './Admin-Interference/product-details/product-details.component';
import { CategoryListComponent } from './Admin-Interference/category-list/category-list.component';
@NgModule({
  declarations: [
    AppComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SdaHttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
