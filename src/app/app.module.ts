import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SdaHttpClientModule } from './data-layer/sda-be-mock.module';
import { SdaHttpClient } from './data-layer/sda-be-mock.service';
import { ProductService } from './services/product.service';
import { SharedModule } from './shared/shared.module';







@NgModule({
  declarations: [
    AppComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SdaHttpClientModule,
    SharedModule
   
  ],
  providers: [SdaHttpClient,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
