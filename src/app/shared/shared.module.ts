import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShopingCardPageComponent } from '../shopping-card/shoping-card-page/shoping-card-page.component';
import { HomeComponent } from '../User-Interference/home/home.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:'cart',component:ShopingCardPageComponent
      },
      
    ])
  ],
  exports:[NavbarComponent, FooterComponent]
})
export class SharedModule { }
