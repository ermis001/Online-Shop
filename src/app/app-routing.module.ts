import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminValidationComponent } from './Admin-Interference/admin-validation/admin-validation.component';
import { AuthGuard } from './services/auth.guard';
import { ShopingCardPageComponent } from './shopping-card/shoping-card-page/shoping-card-page.component';
import { UserLayoutComponent } from './User-Interference/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./User-Interference/user-module/user-module.module').then(
            (m) => m.UserModuleModule
          ),
      },
    ],
  },
  { path: 'admin-validation', component: AdminValidationComponent },
  {
    path: 'admin',
    canActivate: [
      AuthGuard
    ],
    loadChildren: () =>
      import('./Admin-Interference/admin/admin.module').then(
        (m) => m.AdminModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
