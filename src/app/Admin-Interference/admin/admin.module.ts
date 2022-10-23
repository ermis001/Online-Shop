import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CategoryListComponent } from '../category-list/category-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CategoryListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'app-product-list',
        component: ProductListComponent,
      },
     
      { path: 'category-details/:id', component: CategoryListComponent },
      { path: 'product-details/:id', component: ProductDetailsComponent },
    ]),
  ],
})
export class AdminModule {}
