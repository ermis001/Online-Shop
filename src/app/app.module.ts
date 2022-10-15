import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutProductComponent } from './about-product/about-product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SharedModule } from './shared/shared.module';
import { ShoppingCardModule } from './shopping-card/shopping-card.module';
import { ShoppingModule } from './shopping/shopping.module';
import { SdaHttpClientModule } from './data-layer/sda-be-mock.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryListComponent } from './category-list/category-list.component';

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
