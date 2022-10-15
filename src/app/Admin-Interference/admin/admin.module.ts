import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CategoryListComponent } from '../category-list/category-list.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CategoryListComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'app-product-list',component:ProductListComponent
      }
    ])
  ]
})
export class AdminModule { }
