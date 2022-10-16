import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SdaHttpClientModule } from './data-layer/sda-be-mock.module';
import { ProductListService } from './services/product-list.service';
import { ProductDetailsService } from './services/product-details.service';
import { CategoryListService } from './services/category-list.service';





@NgModule({
  declarations: [
    AppComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SdaHttpClientModule
   
  ],
  providers: [ProductListService,ProductDetailsService,CategoryListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
