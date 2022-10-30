import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from '../user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShoppingModule } from 'src/app/shopping/shopping.module';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingCardModule } from 'src/app/shopping-card/shopping-card.module';
import { AboutProductComponent } from '../about-product/about-product.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ShopingPageComponent } from 'src/app/shopping/shoping-page/shoping-page.component';


@NgModule({
  declarations: [UserLayoutComponent,
    AboutProductComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingCardModule,
    ShoppingModule,
    NgxPaginationModule,
    RouterModule.forChild([
      {
        path:'',component:HomeComponent,
      },
      {
        path:'products', component:ShopingPageComponent,
      },
      {
        path:'about', component:AboutUsComponent
      }
    ])
  ]
})
export class UserModuleModule { }
