import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from '../user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingCardModule } from 'src/app/shopping-card/shopping-card.module';
import { AboutProductComponent } from '../about-product/about-product.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ShopingPageComponent } from 'src/app/shopping/shoping-page/shoping-page.component';
import { ShoppingModule } from 'src/app/shopping/shopping.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserLayoutComponent,
    AboutProductComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,SharedModule,ShoppingCardModule,ShoppingModule, FormsModule,
    RouterModule.forChild([
      {
        path:'',component:HomeComponent
      },
      {path:'app-shoping-page',component:ShopingPageComponent},
      {path:'product/:id', component:AboutProductComponent},
      {path: 'about-us', component: AboutUsComponent}
    ])
  ]
})
export class UserModuleModule { }
