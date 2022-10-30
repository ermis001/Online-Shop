import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CategoryListComponent } from '../category-list/category-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AdminValidationComponent } from '../admin-validation/admin-validation.component';

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
    FormsModule,
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
export class AdminModule { }
