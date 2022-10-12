import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopingCardPageComponent } from './shopping-card/shoping-card-page/shoping-card-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
