import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutProductComponent } from 'src/User-Interference/about-product/about-product.component';
import { AboutUsComponent } from 'src/User-Interference/about-us/about-us.component';
import { SharedModule } from './shared/shared.module';
import { ShoppingCardModule } from './shopping-card/shopping-card.module';
import { ShoppingModule } from './shopping/shopping.module';
import { SdaHttpClientModule } from './data-layer/sda-be-mock.module';
import { ProductListComponent } from 'src/Admin-Interference/product-list/product-list.component';
import { ProductDetailsComponent } from 'src/Admin-Interference/product-details/product-details.component';
import { CategoryListComponent } from 'src/Admin-Interference/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutProductComponent,
    AboutUsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ShoppingCardModule,
    ShoppingModule,
    SdaHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
