import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutProductComponent } from './User-Interference/about-product/about-product.component';
import { AboutUsComponent } from './User-Interference/about-us/about-us.component';
import { SharedModule } from './shared/shared.module';
import { ShoppingCardModule } from './shopping-card/shopping-card.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutProductComponent,
    AboutUsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ShoppingCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
