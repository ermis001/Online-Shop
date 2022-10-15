import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from '../user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingCardModule } from 'src/app/shopping-card/shopping-card.module';
import { AboutProductComponent } from '../about-product/about-product.component';
import { AboutUsComponent } from '../about-us/about-us.component';



@NgModule({
  declarations: [UserLayoutComponent,
    AboutProductComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,SharedModule,ShoppingCardModule,
    RouterModule.forChild([
      {
        path:'',component:HomeComponent
      }
    ])
  ]
})
export class UserModuleModule { }
